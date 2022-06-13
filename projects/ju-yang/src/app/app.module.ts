import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { IndexComponent } from './pages/main/index/index.component';
import { NotFoundComponent } from './pages/main/not-found/not-found.component';
import { BigBannerComponent } from './share/big-banner/big-banner.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/main/about/about.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { CooperationComponent } from './pages/main/cooperation/cooperation.component';
import { ContactComponent } from './pages/main/contact/contact.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsProcessComponent } from './pages/main/products-process/products-process.component';
import { ProductsIntroComponent } from './pages/main/products-intro/products-intro.component';

import { LightgalleryModule } from 'lightgallery/angular';
import { CertificateComponent } from './pages/main/certificate/certificate.component';
import { EquipmentComponent } from './pages/main/equipment/equipment.component';
import { ProductsCoatingComponent } from './pages/main/products-coating/products-coating.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    BigBannerComponent,
    AboutComponent,
    ProductsComponent,
    CooperationComponent,
    ContactComponent,
    ProductsProcessComponent,
    ProductsIntroComponent,
    CertificateComponent,
    EquipmentComponent,
    ProductsCoatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    LayoutModule,
    LightgalleryModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
