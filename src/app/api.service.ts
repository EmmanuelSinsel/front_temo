import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) {}


  public getCustomHeaders(): any {
    var token = localStorage.getItem("token_admin");
    if(token != null){
      let headers = new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "token":  token,
        "Access-Control-Allow-Origin":"*"
      });
      return headers
    }
  }

  compilar(code: string){
    let params = {
      code: code
    }
    return this.http.post<any>("http://159.54.141.239:8000/compilar", params, {headers: this.getCustomHeaders()});
  }
}
