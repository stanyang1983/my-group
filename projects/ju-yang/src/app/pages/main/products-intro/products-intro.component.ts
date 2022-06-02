import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-intro',
  templateUrl: './products-intro.component.html',
  styleUrls: ['./products-intro.component.scss', '../../stylesAll.scss']
})
export class ProductsIntroComponent implements OnInit {

  intro1= true;
  intro2=false;
  intro3=false;
  intro4=false;

  constructor() { }

  ngOnInit(): void {
  }

  intro1Change(){
    if(this.intro1 != true){
      this.intro1 = true;
      this.intro1 = false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

  intro2Change(){
    if(this.intro1 != true){
      this.intro2 = true;
      this.intro1 = false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

}
