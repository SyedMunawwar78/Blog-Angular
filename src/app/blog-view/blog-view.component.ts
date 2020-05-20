import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

 

  constructor(private _route:ActivatedRoute,private router: Router,public blogservice : BlogHttpService,private location:Location) { 
      console.log("constructor is called");
  }

  ngOnInit() {

    console.log("ngoninit is called");

    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log(myBlogId);
    //calling the function
   
    this.blogservice.getSingleBlogInformation(myBlogId).subscribe(
      data =>
      {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error =>
      {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog():any{
    this.blogservice.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log("blog deleted");
        console.log(data);
        alert("Blog deleted Successfully");
        setTimeout(() =>{
          this.router.navigate(['/home']);
        },1000)
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");


      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }
  
}
