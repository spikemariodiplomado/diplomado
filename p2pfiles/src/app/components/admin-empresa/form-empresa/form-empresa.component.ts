import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/datamodels/empresa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  
  nombreTxt: string;
  direccionTXT: string;
  telefonoTXT: string;
  ciudadTXT: string;
  contactoTXT: string;
  correoTXT: string;
  usuarioTXT: string;
  claveTXT: string;

  snapshotIdParam = "initial value";
  showUpdate: boolean = false;

  constructor(private empresasService: EmpresasService, private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.snapshotIdParam = this.route.snapshot.paramMap.get("id");

    if (this.snapshotIdParam != null) {
      this.showUpdate = true;
      this.getEmpresa();
    }

  }

  private getEmpresa(): void {
    this.empresasService.getEmpresa(this.snapshotIdParam).subscribe(
      (empresa) => {
        this.nombreTxt = empresa.nombre
        this.direccionTXT = empresa.direccion;
        this.telefonoTXT = empresa.telefono;
        this.ciudadTXT = empresa.ciudad;
        this.contactoTXT = empresa.contacto;
        this.correoTXT = empresa.correo;
        this.usuarioTXT = empresa.usuario;
        this.claveTXT = empresa.clave;
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
    this.redirectToList();
  }

  public btnCancel() {
    this.redirectToList();
  }

  private redirectToList() {
    this.router.navigateByUrl('/empresas');
  }

}

