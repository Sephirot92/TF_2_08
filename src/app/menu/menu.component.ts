import { Component, OnInit } from '@angular/core';
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
  constructor() {
    this.userName = "nie zalogowano";
    this.appName = "New and Big News API";
    this.menuStartIsActive = false;
    this.menuLoginIsActive = false;
    this.menuForumIsActive = false;
    this.menuNewsAddIsActive = false;
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.userName = "Jan Kowalski";
    }, 5000);
  }
  deactivateMenu(): void {
    this.menuStartIsActive = false;
    this.menuLoginIsActive = false;
    this.menuForumIsActive = false;
    this.menuNewsAddIsActive = false;
  }
  activateMenuItem(menuItemName:string) {
    this.deactivateMenu();
    switch(menuItemName) {
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
    }
  }
}