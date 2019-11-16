import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEmpresasComponent } from './components/admin-empresa/listado-empresas/listado-empresas.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormEmpresaComponent } from './components/admin-empresa/form-empresa/form-empresa.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'empresas', component: ListadoEmpresasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empresa', component: FormEmpresaComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
