import { Component, OnInit } from '@angular/core';
//import http service 
import { BlogHttpService } from '../blog-http.service';
//import route module
import { ActivatedRoute, Router } from '@angular/router';
//import toastr service
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string = " this is a default title";
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {}

  //method to create a new blog which calls blog http service to use blog create API
  public createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {

        console.log("Blog Created");
        console.log(data);
        this.toastr.success('Blog Posted Successfully')
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000)
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some Error Occured')
      }

    )

  }

}
