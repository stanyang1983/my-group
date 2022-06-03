import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../stylesAll.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  
subject = [
    { for: '索取色卡'},
    { for: '技術服務'},
    { for: '產品問題'},
    { for: '其他'}  ,
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      company:[''],
      name:['', Validators.required],
      phone:['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ])],
      email:['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      subject:[this.subject[0].for],
      content:['', Validators.required]
    });
  }

  submit(){
    console.log(this.form.value);
    Swal.fire({
      title: '感謝您',
      text: '稍後將會有專人聯繫您！',
      icon: 'success'
    })
    this.reset()
  }

  reset(){
    this.form.reset({
      'company': '',
      'name': '',
      'phone': '',
      'email': '',
      'subject': this.subject[0].for,
      'content': ''
     });
  }

}
