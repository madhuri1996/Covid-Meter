import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apis } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  baseUrl:string;

  constructor(private http: HttpClient) { 
    if (window.location.hostname === 'localhost') {
      this.baseUrl = Apis.devUrl;
    }
  }

  getPatients() {
    return this.http.get( this.baseUrl+Apis.getPatients,{
      headers: {
        Authorization: 'Bearer '+localStorage.getItem('token')
      }
    });
  }

  addPatient(name: string,contactNumber:string) {
    const formData = new FormData();
    formData.append('name',name);
    formData.append('contactNumber',contactNumber);
    return this.http.post( this.baseUrl+Apis.addPatient, formData, {
      headers: {
        Authorization: 'Bearer '+localStorage.getItem('token')
      }
    });
  }
}
