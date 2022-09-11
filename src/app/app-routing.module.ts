import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPeliComponent } from './components/info-peli/info-peli.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { CommonModule } from '@angular/common';
const routes : Routes = [

  {path: '', component: PelisComponent},
  {path: 'info-peli/:id/:', component: InfoPeliComponent},
  {path: 'pelis', component: PelisComponent},
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
// @NgModule({
//   // imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
