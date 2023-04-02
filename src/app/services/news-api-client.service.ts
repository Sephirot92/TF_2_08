import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentItem } from '../domain/CommentItem';
import { NewsItem } from '../domain/NewsItem';
import { RestConfig } from './rest-config';


@Injectable({
  providedIn: 'root'
})
export class NewsApiClientService {

  constructor(private httpClient: HttpClient) { }

  prepareTestData(): Array<NewsItem> {
    let newsList: Array<NewsItem> = new Array<NewsItem>();


    for (let i = 0; i < 10; i++) {
      let news1 = new NewsItem();
      news1.id = i;
      news1.header = "News " + i;
      news1.title = "Tytuł " + i;
      news1.content = "Zawartość " + i;
      newsList.push(news1);
    }
    return newsList;
  }

  getNewsListTest(callback: Function) {
    callback(this.prepareTestData());
  }

  getNewsList(callback: Function) {
    this.httpClient.get<Array<NewsItem>>(`${RestConfig.apiUrl}/news/list`).subscribe((data: Array<NewsItem>) => {
      callback(data);
    });
  }

  getCommentsList(id:Number, callback:Function) {
    this.httpClient.get<Array<CommentItem>>(`${RestConfig.apiUrl}/news/commentsList/${id}`).subscribe((data: Array<CommentItem>) => {
      callback(data);
    } )
  }
}

