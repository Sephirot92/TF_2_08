import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../domain/NewsItem';
import { NewsApiClientService } from '../services/news-api-client.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsItemsList: Array<NewsItem> = new Array<NewsItem>();

  constructor(private newsApiClientService: NewsApiClientService) {}
  
  ngOnInit(): void {
    this.newsApiClientService.getNewsList((newsItemsList: Array<NewsItem>) => {
      this.newsItemsList = newsItemsList;
    });
  }
}

