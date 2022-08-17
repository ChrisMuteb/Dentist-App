import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookanappointmentComponent } from './bookanappointment/bookanappointment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'newpatient', component: NewpatientComponent},
  {path: 'ourservice', component: OurservicesComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'bookanappointment', component: BookanappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
