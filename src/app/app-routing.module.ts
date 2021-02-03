import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { AppComponent } from './app.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
  /* path: '',
    component: AppComponent,
    children: [
      {*/
        path: 'Home',
        component: HomeComponent,
        /*data: {
         budgetRequestStatus: [0],
          title: 'Ativos',
          buttonDetail: {
            link: '/Hotel/Ativos/',
            /*text: 'Responder'
          }
        }*/
      },
      {
        path: 'Ativos',
        component: AssetsComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' },
    //]
 // },
 // { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
