import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/datamodels/empresa';


@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  // listEmpresas: Array<Empresa> = [];
  listEmpresas: Array<any> = [];
  
  nombreTxt: string;
  direccionTXT: string;
  telefonoTXT: string;
  ciudadTXT: string;
  contactoTXT: string;
  correoTXT: string;
  usuarioTXT: string;
  claveTXT: string;
  //Continua agregando variables para mapear cada atributo de la entidad Empresa

  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.getEmpresas();
  }

  private getEmpresas(): void {
    this.empresasService.getEmpresas().subscribe(
      (data) => {
        console.log(data);
        this.listEmpresas = data;
      }
    );
  }

  private newEmpresa() {
    let empresa: Empresa = new Empresa();

    empresa.nombre = this.nombreTxt;
    empresa.direccion = this.direccionTXT;
    empresa.telefono = this.telefonoTXT;
    empresa.ciudad = this.ciudadTXT;
    empresa.contacto = this.contactoTXT;
    empresa.correo = this.correoTXT;
    empresa.usuario = this.usuarioTXT;
    empresa.clave = this.claveTXT;
    //continua agregando los valores de la propiedad del objeto Empresa, según los capturado en los campos
    // del formulario
console.log(empresa);
    return empresa;
  }

  public btnSubmit() {
    this.empresasService.createEmpresa(this.newEmpresa())
  }

}

