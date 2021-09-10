import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  title!: string;
  img1!:string;
  img2!:string;

  constructor(private http:HttpClient) { }
  gettitle(){
    return this.title;
  }
  getimg1(){
    return this.img1;
  }
  getimg2(){
    return this.img2;
  }
  settitle(title:string){
    this.title=title;
  }
  setimg1(img1:string)
  {
    this.img1=img1;
  }
  setimg2(img2:string){
    this.img2=img2;
  }
  saveData(image: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/photos',image);
  }
  getImage():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
