import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GridDocumentosComponent } from './components/grid-documentos/grid-documentos.component';
import { FormEnvioComponent } from './components/form-envio/form-envio.component';
import { ListadoEmpresasComponent } from './admin-empresa/listado-empresas/listado-empresas.component';
import { FormEmpresaComponent } from './components/admin-empresa/form-empresa/form-empresa.component';
import { RelacionEmpresaComponent } from './components/admin-empresa/relacion-empresa/relacion-empresa.component';
import { ListadoRelacionesComponent } from './components/relacion-empresa/listado-relaciones/listado-relaciones.component';
import { FormRelacionComponent } from './components/relacion-empresa/form-relacion/form-relacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridDocumentosComponent,
    FormEnvioComponent,
    ListadoEmpresasComponent,
    FormEmpresaComponent,
    RelacionEmpresaComponent,
    ListadoRelacionesComponent,
    FormRelacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
