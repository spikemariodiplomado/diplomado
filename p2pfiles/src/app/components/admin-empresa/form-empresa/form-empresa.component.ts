import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/datamodels/empresa';
import { ActivatedRoute } from '@angular/router';


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

  snapshotParam = "initial value";
  subscribedParam = "initial value";

  constructor(private empresasService: EmpresasService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("id");

    if (this.snapshotParam != null) {
      this.getEmpresa();
    }

  }

  private getEmpresa(): void {
    this.empresasService.getEmpresas().subscribe(
      (data) => {
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
    
    return empresa;
  }

  public btnSubmit() {
    this.empresasService.createEmpresa(this.newEmpresa())
  }

}

