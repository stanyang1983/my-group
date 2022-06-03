import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss', '../../stylesAll.scss']
})
export class EquipmentComponent implements OnInit {

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
}
