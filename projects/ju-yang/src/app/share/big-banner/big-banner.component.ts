import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bannerOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    dotsEach:1,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: false,
    autoplay:true,
    autoplayTimeout:8000,
    //slideBy:4,
    responsive: {
      1800:{
        items:2,
        center: false,
      },
      1500:{
        items:1.5,
      },
      1200:{
        items:1.5
      },
      600:{
        items:1
      },
      300:{
        items:1
      }
    }
  }

}
