import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  title!:string;
  img1!:string;
  img2!:string;
  constructor(private upload:UploadService,private router:Router) { }

  ngOnInit(): void {
    this.title=this.upload.gettitle();
    this.img1=this.upload.getimg1();
    this.img2=this.upload.getimg2()
  }
  Page1(){
    this.router.navigate(['one']);
  }
  Page2(){
    this.router.navigate(['two']);
  }

}
