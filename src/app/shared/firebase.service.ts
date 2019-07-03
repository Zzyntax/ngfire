import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private https: HttpClient) { }

  private handelError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }
}
