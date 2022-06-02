import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-process',
  templateUrl: './products-process.component.html',
  styleUrls: ['./products-process.component.scss', '../../stylesAll.scss']
})
export class ProductsProcessComponent implements OnInit {

  process1 = true;
  process2 = false;


  constructor() { }

  ngOnInit(): void {
  }

  process1Change(){
    if(this.process1 != true){
      this.process1 = true;
      this.process2 = false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

  process2Change(){
    if(this.process2 != true){
      this.process2 = true;
      this.process1 = false;
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

}
