import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailedContentsService {

  constructor(private _http: HttpClient) {}

  public getDetailedContentsOfContent(conId: any){

    return this._http.get(`${baseUrl}/detailedcontent/content/all/${conId}`);

  }

  public getDetailedContentsOfContentToAppear(conId: any){

    return this._http.get(`${baseUrl}/detailedcontent/content/${conId}`);

  }

  public addDetailedContent(detailedcontent: FormData){
    return this._http.post(`${baseUrl}/detailedcontent/`,detailedcontent);
  }

  public deleteDetailedContent(detailedcontentId: any){
    return this._http.delete(`${baseUrl}/detailedcontent/${detailedcontentId}`)
  }

  //getting the single detailedcontent description
  public getSingleDetailedContent(detailedconId: any){
    return this._http.get(`${baseUrl}/detailedcontent/${detailedconId}`);
  }
  
  // getting the single detailedcontent description
public getDescription(detailedconId:any){
  return this._http.get(`${baseUrl}/detaildedcontent/description/${detailedconId}`);
}
   

  //update detailedcontent
  updateDetailedContent(formData: FormData): Observable<any> {
    return this._http.put(`${baseUrl}/detailedcontent/`, formData);
  }

   
  
}
