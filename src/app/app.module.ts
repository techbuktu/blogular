import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './modules/routing/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
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
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';


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
    BlogCategoryDetailComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
