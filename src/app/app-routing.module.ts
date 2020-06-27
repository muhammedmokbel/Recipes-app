import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RecpieComponent } from './recpie/recpie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyhomeguardGuard } from './myhomeguard.guard';


const routes: Routes =
 [
   {path:"" , redirectTo:"login" , pathMatch:'full'} , 
   {path:"home" , canActivate:[MyhomeguardGuard] ,component:HomeComponent}, 
   {path:"contacts" , canActivate:[MyhomeguardGuard] , component:ContactsComponent} , 
   {path:"recipe/:id", canActivate:[MyhomeguardGuard] , component:RecpieComponent} , 
   {path:"register" , component:RegisterComponent} , 
   {path:"login" , component:LoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
