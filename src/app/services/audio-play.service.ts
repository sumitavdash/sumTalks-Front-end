import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayService {

  private base_Url = 'http://localhost:4000/audio';

  constructor(private http: HttpClient) {}

  getAudioFile(detailedConId: any): Observable<Blob> {
    return this.http.get(`${this.base_Url}/${detailedConId}`, { responseType: 'blob' })
      .pipe(
        catchError(this.handleError)  // Make sure to handle errors using catchError
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something went wrong');  // Use throwError instead of new Observable
  }
}
