import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'details/:id', component: DetailsComponent}
]

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []

  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
