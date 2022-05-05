import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { IndexComponent } from './pages/main/index/index.component';
import { NotFoundComponent } from './pages/main/not-found/not-found.component';
const routes: Routes = [
  // { path: "login", component: LoginComponent, canActivate : [IsloginedGuardService] },

  { path: "", component: MainComponent, children:[
    { path: "", redirectTo: 'index', pathMatch: 'full' },
    { path: "index", component: IndexComponent },
    { path: "**", component: NotFoundComponent }
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
