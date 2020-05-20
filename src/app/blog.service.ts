import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "tags": ["humour", "chandler", "joey"],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 1,
      "bodyhtml": "<h1>THIS IS BODY</h1>",
      "title": "blog1",
      "description": "this is blog1",
    },
    {
      "blogId": "2",
      "tags": [],
      "category": "comedy",
      "views": 1,
      "bodyhtml": "this is body",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "author": "admin",
      "isPublished": true,
      "title": "blog2",
      "description": "this is blog1",

    },
    {
      "blogId": "3",
      "lastModified": "2020-03-02T12:20:47.854Z",
      "created": "2020-03-02T12:20:47.854Z",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 1,
      "body html": "this is body",
      "title": "blog3",
      "description": "this is blog3",
    }
  ]


  public currentBlog;

  constructor() {
    console.log("Blog service is called");
  }

  //method tu return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    //for of loop from typescript
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }

    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
