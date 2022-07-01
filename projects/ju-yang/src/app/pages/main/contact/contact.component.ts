import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { MailService } from './mail.service';
import { CaptchaComponent } from '../../../share/captcha/captcha.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../stylesAll.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('verifyCode')
  verifyCode: CaptchaComponent = new CaptchaComponent; //获取页面中的验证码组件

  form!: FormGroup;


subject = [
    { for: '索取色卡'},
    { for: '技術服務'},
    { for: '產品問題'},
    { for: '其他'}  ,
  ];

  constructor(private fb: FormBuilder,private mailService:MailService) { }

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
      content:['', Validators.required],
      captcha:['', Validators.required]
    });
  }

  mailText:string = "";

  submit(){

    console.log(this.form.value);
    if(!this.verifyCode.validate(this.form.controls['captcha'].value)){
      Swal.fire({
        title: '驗證碼錯誤!',
        icon: 'error'
      });
      this.form.controls['captcha'].reset();
    }else{

      this.mailService.sendMail(
        this.form.controls['company'].value.replace(/\s+/g, ''),
        this.form.controls['name'].value.replace(/\s+/g, ''),
        this.form.controls['phone'].value.replace(/\s+/g, ''),
        this.form.controls['email'].value.replace(/\s+/g, ''),
        this.form.controls['subject'].value.replace(/\s+/g, ''),
        this.form.controls['content'].value.replace(/\s+/g, ''),
      ).subscribe({
        next:(res)=>{

        },
        error:(error)=>{
          console.log(error);
          if(error.error.text == 'success'){

            Swal.fire({
              title: '感謝您',
              text: "將會有專人聯繫您！",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(() => {
              window.location.reload();
            })

            //this.reset()
          }else{
            Swal.fire({
              title: 'error',
              icon: 'error'
            });
          }
        }
      });


    }



    this.reset()

  }

  reset(){
    this.form.reset({
      'company': '',
      'name': '',
      'phone': '',
      'email': '',
      'subject': '',
      'content': ''
     });
     this.form.controls['captcha'].reset();
  }

}
