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

  //getting the single question
  public getSingleDetailedContent(detailedconId: any){
    return this._http.get(`${baseUrl}/detaildedcontent/${detailedconId}`);
  }
   

  //update question
  public updateDetailedContent(detailedcontent: FormData, updatedImageFile?: File, 
                                       updatedAudioFile?: File):Observable<any>{

                                        // If an updated image file is provided, append it to the FormData
                  if (updatedImageFile) {
                          detailedcontent.append('updatedImageFile', updatedImageFile);
                 }
                 // If an updated image file is provided, append it to the FormData
                if (updatedAudioFile) {
                       detailedcontent.append('updatedAudioFile', updatedAudioFile);
                }      
    return this._http.put(`${baseUrl}/detailedcontent/`, detailedcontent);

  }

  //eval Quiz
  // public evalQuiz(questions: any){
  //   return this._http.post(`${baseUrl}/question/eval-quiz`,questions)
  // }

  
}
