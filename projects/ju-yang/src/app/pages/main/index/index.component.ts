import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', '../../stylesAll.scss']
})
export class IndexComponent implements OnInit {

  constructor(private meta:Meta,private title:Title) {
    this.meta.addTags([
      {name:'description',content:'炬洋有限公司成立於西元1981年，設立於彰化縣芳苑鄉， 專營建築帷幕、室內外門窗鋁擠型、工業用鋁擠型等鋁材專業塗裝與表面處理。我們擁有專業粉體烤漆技術團隊與自動化生產設備，並有堅強的業務團隊 提供給客戶優質的烤漆專業的服務與諮詢，給予客戶最滿意且安心的品質。'},
      {name:'author',content:'juyang'},
      {name:'keywords',content:'炬洋有限公司,彰化縣,芳苑鄉,建築,帷幕,室內外門窗,鋁門窗,鋁擠型,工業用鋁擠型,鋁材,專業塗裝,表面處理,粉體烤漆'},
    ]);
    this.setTitle('炬洋有限公司')
  };
  public setTitle(newTitle:string){
    this.title.setTitle( newTitle );
  }

  ngOnInit(): void {
  }

}
