import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GridDocumentosComponent } from './components/documentos/grid-documentos/grid-documentos.component';
import { FormEnvioComponent } from './components/documentos/form-envio/form-envio.component';
import { ListadoEmpresasComponent } from './components/admin-empresa/listado-empresas/listado-empresas.component';
import { FormEmpresaComponent } from './components/admin-empresa/form-empresa/form-empresa.component';
import { ListadoRelacionesComponent } from './components/relacion-empresa/listado-relaciones/listado-relaciones.component';
import { FormRelacionComponent } from './components/relacion-empresa/form-relacion/form-relacion.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridDocumentosComponent,
    FormEnvioComponent,
    ListadoEmpresasComponent,
    FormEmpresaComponent,
    ListadoRelacionesComponent,
    FormRelacionComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
