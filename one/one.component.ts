import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule } from '@angular/forms';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  uploadForm!: FormGroup;
  head: any;
  image1:any;
  image2:any;

  constructor(private form:FormBuilder,private http:HttpClient,private upload:UploadService,private router:Router) { }

  ngOnInit(): void {
    this.uploadForm=this.form.group({
      title:[''],
      img1:[''],
      img2:['']
    });

  }
  getpost(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  onSelect(event : any){
    if (event.target.files && event.target.files[0]){
      var reader=new FileReader();
      reader.onload=(event:ProgressEvent)=>{
        this.image1=(<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  onSelect2(event : any){
    if (event.target.files && event.target.files[0]){
      var reader=new FileReader();
      reader.onload=(event:ProgressEvent)=>{
        this.image2=(<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }


  }
  onUpload(){
    this.upload.settitle(this.uploadForm.value.title);
    this.upload.setimg1(this.image1);
    this.upload.setimg2(this.image2);
    this.upload.saveData(this.uploadForm.value);
    this.uploadForm.reset({});
    this.router.navigate(['three']);

  }
  allPhotos(){
    this.router.navigate(['two']);
  }

}
