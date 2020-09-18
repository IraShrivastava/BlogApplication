//by default stmt, angular way of importing header file
import { Component, OnInit, OnDestroy } from '@angular/core';
//import http service to communicate with backend and to make shared methoda and variables
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service"

//decorator actually performs the functionality of making these classes a part of the angular ecosystem, logic given in javascript file will be executed inside the component 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//simple class

export class HomeComponent implements OnInit, OnDestroy {


  public allBlogs = [];

  constructor(public blogHttpService: BlogHttpService) {
    console.log("home component constructor called");
  }

  ngOnInit() {
    console.log("home component OnInIt called");
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBlogs);

  }

  ngOnDestroy() {
    console.log("home component destroy called");
  }

}
