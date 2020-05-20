import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
public currentBlog;

public allBlogs; 

  constructor(public blogHttp:BlogHttpService) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ngoninit is called");
    this.allBlogs = this.blogHttp.getAllBlogs().subscribe(
      data => {
        console.log("logging data..");
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    );

  }

  ngOnDestroy() {
    console.log("ngondestroy is called");

  }

}
