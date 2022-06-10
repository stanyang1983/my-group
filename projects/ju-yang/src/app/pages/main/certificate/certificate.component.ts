import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss', '../../stylesAll.scss']
})
export class CertificateComponent implements OnInit {


  intro1 = true;
  intro2 = false;
  intro3 = false;
  intro4 = false;


  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
    download: false,
    share: false,
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


  intro1Change(){
    if(this.intro1 != true){
      this.intro1 = true;
      this.intro2 = false;
      this.intro3 = false;
      this.intro4= false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  intro2Change(){
    if(this.intro2 != true){
      this.intro1 = false;
      this.intro2 = true;
      this.intro3 = false;
      this.intro4= false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  intro3Change(){
    if(this.intro3 != true){
      this.intro1 = false;
      this.intro2 = false;
      this.intro3 = true;
      this.intro4= false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }
}

intro4Change(){
  if(this.intro4 != true){
    this.intro1 = false;
    this.intro2 = false;
    this.intro3 = false;
    this.intro4= true;
    window.scroll({
      top: 300,
      left: 0,
      behavior: 'smooth'
    });
  }
}

}
