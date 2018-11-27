import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { BlogCategoryService } from '../../services/blog-category/blog-category.service';

// Import mock data to use during dev
import { CATEGORY_LIST } from '../../mock-data/blog_categories';
import { BLOG_POSTS } from '../../mock-data/blog_posts';
import { BLOG_CATEGORY } from '../../mock-data/blog_category';


@Component({
  selector: 'app-blog-category-detail',
  templateUrl: './blog-category-detail.component.html',
  styleUrls: ['./blog-category-detail.component.css']
})
export class BlogCategoryDetailComponent implements OnInit {

  category: any;
  category_posts: any;
  category_error_message: string;
  posts_error_message: string;
  delete_post_success_message:string;
  delete_post_error_message: string;
  http_connection_error_message:string;
  category_posts_error_message:string;
  parentBlogUrl:string;
  categoryUrl: string;

 
  constructor(private categoryService: BlogCategoryService, private postService: BlogPostService,
    private router: Router, private route: ActivatedRoute, private location: Location) {
      this.route.params.subscribe(
        params => {
          this.categoryUrl = params.categoryUrl;
          this.parentBlogUrl = params.blogUrl;
        }
      )
     }
  
    ngOnInit() {
      this.getCategoryDetails();
      this.getBlogPostsinCategory();
    }
  
    getCategoryDetails(){
      this.categoryService.getCategoryByUrl(this.categoryUrl).subscribe(
        res => {
          this.category = res;
        },
        err => {
          this.category_error_message = err.message;
          this.category = BLOG_CATEGORY;
        },
        () => {
          //REMOVE before deployment
          console.log("BlogCategoryDetailComponent.getCategoryDetails() called.");
        }
      )
    }
  
    getBlogPostsinCategory(){
      this.postService.getPostsInCategory(this.categoryUrl).subscribe(
        posts => {
          this.category_posts = posts;
          console.log(this.category_posts);
        },
        err => {
          this.posts_error_message = err.message;
          this.category_posts_error_message = "No blog posts were found in the ", this.category.name, "category."
          this.category_posts = BLOG_POSTS;
          console.log(this.category_posts);
        },
        () => {
          //REMOVE before deployment
          console.log("BlogCatgoryDetailComponent.getPostsinCategory() called.");
          
        }
      )
    }
  
    deletePost(postUrl){
      this.postService.deletePost(postUrl).subscribe(
        res => {
          this.delete_post_success_message = "Blog Post with URL: " + postUrl + 'deleted';
        },
        err => {
          this.delete_post_error_message = err.message;
        },
        () => {
          //REMOVE before deployment
          console.log("BlogCategoryDetailComponent.deletePost() run...");
        }
      )
    }
  
    updateCategory(){
  
    }
  
    goBack(){
      this.location.back();
    }
  
    gotoParentBlog(){
      this.router.navigate(['blogs', this.parentBlogUrl]);
    }
  }
  