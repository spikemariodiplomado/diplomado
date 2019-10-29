import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEmpresasComponent } from './components/admin-empresa/listado-empresas/listado-empresas.component';

const routes: Routes = [
  { path: 'empresas', component: ListadoEmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
