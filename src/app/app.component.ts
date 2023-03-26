import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Czapraga-Lukasz-PR08';
  activeMenuItem:String = "";

  onActivateMenuItem(itemName:String) {
    this.activeMenuItem = itemName;
  }
}
