import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyoutPageComponent } from './Component/leyout-page/leyout-page.component';


const routes: Routes = [

  {
    path:"",
  component:LeyoutPageComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  

 }
