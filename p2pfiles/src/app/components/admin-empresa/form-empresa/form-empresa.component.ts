import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/datamodels/empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  companyForm: FormGroup;

  snapshotParam = "initial value";
  subscribedParam = "initial value";

  constructor(private empresasService: EmpresasService, private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this._InitCompanyForm();
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

  public validateUser() {
    if (this.companyForm.valid) {
      this.empresasService.createEmpresa(this.newEmpresa())
      this.router.navigateByUrl('/empresas');
    }
  }

  public btnCancel() {
    // redireccionar a empresas
    this.router.navigateByUrl('/empresas');
  }

  public IsValid(control: string): boolean {
    return this.companyForm.get(control).valid;
  }


  private _InitCompanyForm() {
    this.companyForm = this.formBuilder.group({
      nombreTxt: ['', [Validators.required]],
      direccionTxt: ['', [Validators.required]],
      telefonoTxt: ['', [Validators.required]],
      ciudadTxt: ['', [Validators.required]],
      contactoTxt: ['', [Validators.required]],
      correoTxt: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      usuarioTxt: ['', [Validators.required]],
      claveTxt: ['', [Validators.required, Validators.email]]
    });
  }

}

