import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('navOpen', [
      state('open', style({
        visibility: 'visible',
        opacity: 1
      })),
      state('closed', style({
        visibility: 'hidden',
        left:'0',
        opacity: 0
      })),

      transition('closed => open', [
        animate('0.3s')
      ]),
      transition('open => closed', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {


  navOpen = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    //寬度監聽顯示NAV
    this.breakpointObserver
      .observe(['(min-width: 768px)']).subscribe((state: BreakpointState) => {
        if (state.matches) {

          this.navOpen = true;
        } else {
          this.navOpen = false;
        }
     });

  }


  openNav(){
    this.navOpen = !this.navOpen;
  }
  child =false;
  toggleChild(){
    this.child = !this.child;
  }


  mobileCloseNav(){
    this.breakpointObserver
    .observe(['(min-width: 768px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
      } else {
        this.navOpen = false;
      }
   });
  }
}
