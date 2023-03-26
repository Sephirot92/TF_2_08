import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appName: string;
  welcomeMessage: string;
  constructor() {
    this.appName = "New and Big News API";
    this.welcomeMessage = " Hello there!"
  }
}
