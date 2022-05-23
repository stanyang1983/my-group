import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { IndexComponent } from './pages/main/index/index.component';
import { AboutComponent } from './pages/main/about/about.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { QualityComponent } from './pages/main/quality/quality.component';
import { CooperationComponent } from './pages/main/cooperation/cooperation.component';
import { ContactComponent } from './pages/main/contact/contact.component';
import { NotFoundComponent } from './pages/main/not-found/not-found.component';
const routes: Routes = [
  // { path: "login", component: LoginComponent, canActivate : [IsloginedGuardService] },

  { path: "", component: MainComponent, children:[
    { path: "", redirectTo: 'index', pathMatch: 'full' },
    { path: "index", component: IndexComponent },
    { path: "products", component: ProductsComponent },
    { path: "cooperation", component: CooperationComponent },
    { path: "quality", component: QualityComponent },
    { path: "contact", component: ContactComponent },
    { path: "about", component:AboutComponent},
    { path: "**", component: NotFoundComponent }
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
