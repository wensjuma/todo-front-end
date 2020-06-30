import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiHost: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiHost = "http://localhost/todo-api/"

  }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
      // 'Authorization': this._authService.getToken
    });
  }
  public post(channel: string, model: any): any {
    return this.http.post(this.apiHost + channel, model, { headers: this.getHeaders() }
    ).pipe(map(response => {
      // if(this._authService.isAuthenticated){
      //      response = response;

      return response;
      // }else{
      //     //this.toastrService.error('Your session has expired, please login again', 'Logged out!')
      //     this.router.navigate(['/login'])

      // }


    }));
  }
}
