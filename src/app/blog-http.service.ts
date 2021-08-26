import { Injectable } from '@angular/core';
//importing Http client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code
import { Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  //variable to store backend base url, and authtoken
  //public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public baseUrl = 'http://localhost:3000/api/v1/blogs'
  //public authToken ="ZGJkMTVhOWQyMTJkOGUzMWI0ZmQzMDJjZmE3YmYwNDljNjNkZmVkM2U2ODkyZjZjZTVlYmRlYThmODY1NTAyNmM2NDMwYzVmMjBkM2RhYWFkNTU0NjMwOTM5YWU2OTRkMmUyOGI5NDk0YmNiYzJiZDJhMjRkMWRiNThjM2ExZWVjMA=="
  public authToken = "Admin"
  constructor(private _http:HttpClient) {

    console.log("blog-http service called");

  }

  //exception handler
  private handleError(err: HttpErrorResponse){
    console.log("handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all the blogs
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  //method to get particular blog
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl+'/view'+ '/' + currentBlogId +'/'+ '?authToken=' + this.authToken);
    return myResponse;
  }

  //method to create a new blog
  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl +'/create'+'?authToken='+this.authToken, blogData);
    return myResponse;
  }

  //method to delete a blog
  public deleteBlog(blogId):any {
    let data= {}
    let myResponse= this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken, data);
    return myResponse;
  }

  //method to edit the blog
  public editBlog(blogId, blogData): any {

    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.authToken, blogData);
    return myResponse;
  }

}
