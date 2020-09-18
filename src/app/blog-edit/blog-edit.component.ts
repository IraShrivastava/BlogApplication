import { Component, OnInit } from '@angular/core';
//import HTTP service
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from './../blog.service';
//import route modules
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
//import toastr service
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some Error Occurred')
      }
    )
  }

  //method to edit the blog, which makes call to http service 
  public editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {

        console.log(data);
        this.toastr.success('Blog Edited Successfully')
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some Error Occurred')
      }

    )

  }

}
