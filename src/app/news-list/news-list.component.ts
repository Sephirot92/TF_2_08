import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../domain/CommentItem';
import { NewsItem } from '../domain/NewsItem';
import { NewsApiClientService } from '../services/news-api-client.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsItemsList: Array<NewsItem> = new Array<NewsItem>();
  commentItemsList: Array<CommentItem> = new Array<CommentItem>();

  constructor(private newsApiClientService: NewsApiClientService) { }

  ngOnInit(): void {
    this.newsApiClientService.getNewsList((newsItemsList: Array<NewsItem>) => {
      this.newsItemsList = newsItemsList;
    });
  }

  showDetails(newsItem: NewsItem) {
    this.newsApiClientService.getCommentsList(newsItem.id, (commentItemsList: Array<CommentItem>) => {
      console.log(commentItemsList)
      this.commentItemsList = commentItemsList;
    });
  }

  deleteComment(commentItem: CommentItem) {
    this.newsApiClientService.deleteComment(commentItem, () => {
      this.newsApiClientService.getCommentsList(commentItem.newsId, (commentItemsList:
        Array<CommentItem>) => {
        this.commentItemsList = commentItemsList;
      });
    });
  }
}

