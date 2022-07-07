import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Params, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(private http: HttpClient, private router: Router) { }


  sendMail(
    company:string,
    name:string,
    phone:string,
    email:string,
    subject:string,
    content:string
  ): Observable<any>{

    // let headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Header' : 'authorization'
    // });

    // let queryParams: Params = {
    //   "company": company,
    //   "name": name,
    //   "phone": phone,
    //   "email": email,
    //   "subject": subject,
    //   "content": content,
    //   "to": "zell_eva@hotmail.com"
    // };
    const formData:any = new FormData();
    formData.append('company', company);
    formData.append("name" , name,);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('content', content);
    formData.append('to', 'juyang3q@gmail.com');

    console.log(formData);

    return this.http.post<any>('http://juyangcoating.com.tw/api/' ,formData);
  }
}
