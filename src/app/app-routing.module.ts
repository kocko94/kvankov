import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HireComponent} from './hire/hire.component';


const routes: Routes = [
  {path: 'hire', component: HireComponent},
  {path: '**', redirectTo: 'hire'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
