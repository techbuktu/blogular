import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import all component classes for use in routing requests
import { BlogCategoryDetailComponent } from '../../components/blog-category-detail/blog-category-detail.component';
import { BlogDetailComponent } from '../../components/blog-detail/blog-detail.component';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';
import { BloggerDetailComponent } from '../../components/blogger-detail/blogger-detail.component';
import { BloggerListComponent } from '../../components/blogger-list/blogger-list.component';
import { BlogpostComponent } from '../../components/blogpost/blogpost.component';
import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
