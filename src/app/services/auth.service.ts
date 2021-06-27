import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apis } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl:string;

  constructor(private http: HttpClient) { 
    if (window.location.hostname === 'localhost') {
      this.baseUrl = Apis.devUrl;
    }
  }

  signIn(username: string,password:string) {
    const formData = new FormData();
    formData.append('name',username);
    formData.append('password',password);
    return this.http.post( this.baseUrl+Apis.signin, formData, {});
  }

  signUp(username: string,password:string) {
    const formData = new FormData();
    formData.append('name',username);
    formData.append('password',password);
    return this.http.post( this.baseUrl+Apis.signup, formData, {});
  }
  
}
