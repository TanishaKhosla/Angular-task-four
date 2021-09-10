import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  posts=[
    {
      title:'',
      img1:'',
      img2:'',
    }
  ];
  photo:any;

  constructor(private upload:UploadService,private router:Router) { 
  }
  ngOnInit(): void {
    this.upload.getImage().subscribe((result)=>{
      this.photo=result as Array<Object>;
    });
  }
  // pushObject(){
  //   this.posts.push({
  //     title:'',
  //     img1:'',
  //     img2:'',
  //   });
  // }
 userInput(){
 this.router.navigate(['three']) }
}
