import { Injectable } from '@angular/core';
//import http-client
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//import observables
import { Observable, Subject } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})  
export class BlogHttpService {

public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
public authToken = 'MWFlZDllNTc5YzZhMTIyZjZjYWM1MWI0OWJhMmQ2ZTgwMzA5MDRhZmU2NzdmZjJlMjlmYWIxMTEwMTkzMmE1ZjdiODFlMGM3YWQ1ZGMwNzgzMGM4YWU4ZDZiMGJkYmRmNTNhMzAyNDk1YjRjZTIwN2QyNDg2MzY5OTE2NWFkZjVjNg=='

  constructor(private _Http:HttpClient) {
       console.log("blog-http is called")
   }

   //exception handler
  
   private handleError(err : HttpErrorResponse) {
     console.log("handle errors http calls");
     console.log(err.message);
     return Observable.throw(err.message);
   }

    //method tu return all the blogs
  public getAllBlogs(): any {

    let myResponse = this._Http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse; 
  }

  public getSingleBlogInformation(currentBlogId): any {
       
    let myResponse = this._Http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  public createBlog(blogData):any{
    let myResponse = this._Http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData);
    return myResponse;
  }

  public deleteBlog(blogId):any {
    let data={}
   let myResponse = this._Http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken,data);
   return myResponse; 
  }

  public editBlog(blogId,blogData):any {
   let myResponse = this._Http.post(this.baseUrl+'/'+blogId+'/edit'+'?authToken'+this.authToken,blogData);
   return myResponse;
  }


}


