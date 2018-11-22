import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { BLOG_POST } from '../../mock-data/blog_post';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  

  constructor(private blogPostService: BlogPostService) { }

  
  blog_post;
  post_error_message:string;

  ngOnInit() {
    this.getBlogPost();
  }
  
  getBlogPost(){
    this.blogPostService.getPost('digital-nomad').
    subscribe(
      res => {
        this.blog_post = res;
      },
      err => {
        this.post_error_message = err.message;
        this.blog_post = BLOG_POST;
      },
      () => {
        console.log("BlogComponent.getBlogPosts() done running..");
      }
    )
  }
}
