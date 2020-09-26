import { Component, OnInit, OnDestroy } from '@angular/core';
//importing route related code
import { ActivatedRoute, Router } from '@angular/router'
//import the services used
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service'
//import toaster service
import { ToastrService } from 'ngx-toastr'
//importing location service to access browser history
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService, private location: Location, private toastr: ToastrService) {
    console.log("blog view constructor is called");
  }


  ngOnInit() {
    console.log("blog view ngOnInIt Called");
    //getting the blog Id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId of the overall array
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }


  public deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted Successfully')
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMesaage);
        this.toastr.error('Some Error Occurred')
      }

    )

  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog view destroy called");
  }

}
