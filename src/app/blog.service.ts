import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  //dummy blog variable
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:28:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text </h1> <p>Small Text</p>",
      "description": "this is description of example blog & this is edited",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. This is blog body. ",
      "description": "this is the third blog description",
      "title": "This is third blog"
    }
  ]


  public currentBlog;


  constructor() {
    console.log("Service constructor called");
  }

  //method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  //method to get particular blog
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
