import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news/list', component: NewsListComponent},
  {path: 'news/add', component:EditNewsComponent},
  {path: 'comment/add/:newsId', component: AddCommentComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
