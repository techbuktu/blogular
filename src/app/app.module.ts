import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogCommentListComponent } from './components/blog-comment-list/blog-comment-list.component';
import { BlogCommentItemComponent } from './components/blog-comment-item/blog-comment-item.component';
import { HomeComponent } from './components/home/home.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { BloggerListComponent } from './components/blogger-list/blogger-list.component';
import { BloggerDetailComponent } from './components/blogger-detail/blogger-detail.component';
import { BlogCategoryDetailComponent } from './components/blog-category-detail/blog-category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogCommentListComponent,
    BlogCommentItemComponent,
    HomeComponent,
    BlogpostComponent,
    BloggerListComponent,
    BloggerDetailComponent,
    BlogCategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
