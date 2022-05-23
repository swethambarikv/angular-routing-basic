import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Routinglink1Component} from './routinglink1/routinglink1.component'
import {Routinglink2Component} from './routinglink2/routinglink2.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'routinglinkone',component:Routinglink1Component},
  {path:'routinglinktwo',component:Routinglink2Component},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
