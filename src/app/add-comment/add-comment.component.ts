import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../domain/CommentItem';
import { UserInfoService } from '../services/UserInfoService';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiClientService } from '../services/news-api-client.service';
import { NewsApiResponse } from '../domain/NewsApiResponse';
import { RestConfig } from '../services/rest-config';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{

  commentItem: CommentItem;

  
  constructor   (private userInfoService: UserInfoService,
                private route: ActivatedRoute,
                private newsApiClientService: NewsApiClientService,
                private router: Router) {
    this.commentItem = new CommentItem(userInfoService);
    this.commentItem.author = this.userInfoService.getLoggedUserData().fullname();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.commentItem.newsId = +params['newsId'];
    });
  }

  addComment() {
    this.newsApiClientService.addComment(this.commentItem, () => {
      this.router.navigate(['/news/list']);
    })
  }

}
