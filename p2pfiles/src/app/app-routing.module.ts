import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEmpresasComponent } from './components/admin-empresa/listado-empresas/listado-empresas.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormEmpresaComponent } from './components/admin-empresa/form-empresa/form-empresa.component';
import { ListaDocumentosEnviadosComponent } from './components/documentos/lista-documentos-enviados/lista-documentos-enviados.component';
import { FormEnvioComponent } from './components/documentos/form-envio/form-envio.component';
import { ListaDocumentosRecibidosComponent } from './components/documentos/lista-documentos-recibidos/lista-documentos-recibidos.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'empresas', component: ListadoEmpresasComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'empresa', component: FormEmpresaComponent, canActivate: [AuthGuard] },
  { path: 'empresa/:id', component: FormEmpresaComponent, canActivate: [AuthGuard] },
  { path: 'documentosenviados', component: ListaDocumentosEnviadosComponent, canActivate: [AuthGuard] },
  { path: 'documentosrecibidos', component: ListaDocumentosRecibidosComponent, canActivate: [AuthGuard] },
  { path: 'enviardocumento', component: FormEnvioComponent, canActivate: [AuthGuard] },
  { path: 'documento/:id', component: FormEnvioComponent, canActivate: [AuthGuard] },
  { path: 'dwndocumento/:id', component: FormEnvioComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
