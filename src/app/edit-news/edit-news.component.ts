import { Component, ContentChild, OnInit } from '@angular/core';
import { NewsItem } from '../domain/NewsItem';
import { UserInfoService } from '../services/UserInfoService';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsApiResponse } from '../domain/NewsApiResponse';
import { NewsApiClientService } from '../services/news-api-client.service';



@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent  implements OnInit {
  
  @ViewChild('headerElem', {static: true}) headerElem: ElementRef | undefined;

  newsItem: NewsItem;

  constructor(private userInfoService:UserInfoService, private newsApiClientService: NewsApiClientService) {
    this.newsItem = new NewsItem();
    this.newsItem.setAuthor(this.userInfoService.getLoggedUserData().fullname());
  }

  ngOnInit(): void {
    if(this.headerElem) {
      this.headerElem.nativeElement.style.color = "blue";
    }
  }

  addNews(form: NgForm) {
    this.newsApiClientService.addNews(this.newsItem, (response: NewsApiResponse) => {
      form.resetForm()
    })
  }
}
