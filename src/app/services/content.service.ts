import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private _http:HttpClient) {}
   
  public contents(){
    return this._http.get(`${baseUrl}/content/`);
  }

  // public addContent(content:any){

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });

  //   return this._http.post(`${baseUrl}/content/`, content,  { headers, observe: 'response' });


  // }

  public addContent(content: FormData) {
    return this._http.post(`${baseUrl}/content/`, content);
  }

  public deleteContent(conId:any){

    return this._http.delete(`${baseUrl}/content/${conId}`);
  }

  //getting the single quiz
  public getContent(conId: any){
    return this._http.get(`${baseUrl}/content/${conId}`);
  }
  // //update quiz
  // public updateContent(content: FormData, updatedImageFile?: File): Observable<any> {
  //   // If an updated image file is provided, append it to the FormData
  //   if (updatedImageFile) {
  //     content.append('updatedImageFile', updatedImageFile);
  //   }

  //   return this._http.put(`${baseUrl}/content/`, content);
  // }
  public updateContent(content: FormData, conImageFile?: File): Observable<any> {
    // If an updated image file is provided, append it to the FormData
    if (conImageFile) {
      content.append('updatedImageFile', conImageFile); // This line is incorrect
    }

    // The append method expects a string as the second argument, 
    // so you need to append the updatedImageFile as a separate key-value pair.
    if (conImageFile) {
      content.append('conImageFile', conImageFile, conImageFile.name);
    }

    return this._http.put(`${baseUrl}/content/`, content);
}

  //get quizzes of category
  public getContentsOfCategory(cid: any){
    return this._http.get(`${baseUrl}/content/category/${cid}`);
  }
  //get active quizzes
  public getActiveContents(){
    return this._http.get(`${baseUrl}/content/active`);

  }
  //get active quizzes of category
  public getActiveContentsOfCategory(cid: any){

   return this._http.get(`${baseUrl}/content/category/active/${cid}`);

  }
}

