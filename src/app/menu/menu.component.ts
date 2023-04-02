import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggedUser } from '../domain/LoggedUser';
import { UserInfoService } from '../services/UserInfoService';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName: string;
  appName: string;
  menuStartIsActive: boolean;
  menuLoginIsActive: boolean;
  menuForumIsActive: boolean;
  menuNewsAddIsActive: boolean;
  menuAdministrationIsActive: boolean;
  userIsAdmin:Boolean = false;
  @Output()
  activateMenuItemEvent: EventEmitter<String> = new EventEmitter();
  constructor(private userInfoService: UserInfoService) {
    this.userName = "nie zalogowano";
    this.appName = "New and Big News API";
    this.menuStartIsActive = false;
    this.menuLoginIsActive = false;
    this.menuForumIsActive = false;
    this.menuNewsAddIsActive = false;
    this.menuAdministrationIsActive = false;
  }
  ngOnInit(): void {
    let userInfo: LoggedUser = this.userInfoService.getLoggedUserData();
    setTimeout(() => {
      this.userName = userInfo.fullname();
      this.userIsAdmin = userInfo.isAdmin;
    }, 5000);
  }
  deactivateMenu(): void {
    this.menuStartIsActive = false;
    this.menuLoginIsActive = false;
    this.menuForumIsActive = false;
    this.menuNewsAddIsActive = false;
    this.menuAdministrationIsActive = false;
  }
  activateMenuItem(menuItemName: string) {
    this.deactivateMenu();
    switch (menuItemName) {
      case 'START':
        this.menuStartIsActive = true;
        break;
      case 'LOGIN':
        this.menuLoginIsActive = true;
        break;
      case 'FORUM':
        this.menuForumIsActive = true;
        break;
      case 'NEWSADD':
        this.menuNewsAddIsActive = true;
        break;
      case 'ADMINISTRATION':
        this.menuAdministrationIsActive = true;
        break;
    }
    this.activateMenuItemEvent.emit(menuItemName);
  }
}