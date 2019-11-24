import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEmpresasComponent } from './components/admin-empresa/listado-empresas/listado-empresas.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormEmpresaComponent } from './components/admin-empresa/form-empresa/form-empresa.component';
import { ListaDocumentosEnviadosComponent } from './components/documentos/lista-documentos-enviados/lista-documentos-enviados.component';
import { FormEnvioComponent } from './components/documentos/form-envio/form-envio.component';
import { ListaDocumentosRecibidosComponent } from './components/documentos/lista-documentos-recibidos/lista-documentos-recibidos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'empresas', component: ListadoEmpresasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empresa', component: FormEmpresaComponent },
  { path: 'empresa/:id', component: FormEmpresaComponent },
  { path: 'documentosenviados', component: ListaDocumentosEnviadosComponent },
  { path: 'documentosrecibidos', component: ListaDocumentosRecibidosComponent },
  { path: 'enviardocumento', component: FormEnvioComponent },
  { path: 'documento/:id', component: FormEnvioComponent },
  { path: 'dwndocumento/:id', component: FormEnvioComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
