import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Documento } from 'src/app/datamodels/documento';
import { Empresa } from 'src/app/datamodels/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-form-envio',
  templateUrl: './form-envio.component.html',
  styleUrls: ['./form-envio.component.css']
})
export class FormEnvioComponent implements OnInit {

  listEmpresas: Array<Empresa> = [];

  codigo:string;
  nombreEnvio:String;
  nombreDestino:string;
  fechaRecibido:Date;
  inicioVigencia:string;
  finVigencia:string;
  
  snapshotIdParam = "initial value";
  showUpdate: boolean = false;
  fileToUpload: File = null;

  constructor(private empresasService: EmpresasService, private router: Router, 
    private readonly route: ActivatedRoute,
    private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.snapshotIdParam = this.route.snapshot.paramMap.get("id");

    this.getEmpresas();

    if (this.snapshotIdParam != null) {
      this.showUpdate = true;
      this.getDocumento();
    }
  }

  private getDocumento(): void {}

  private getEmpresas(): void {
    this.empresasService.getEmpresas().subscribe(
      (empresas) => {
        if ( empresas.length > 0) {
          this.listEmpresas = empresas
        }
      }
    );
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  public btnSubmit() {
    // this.empresasService.createEmpresa(this.newEmpresa())
    this.redirectToList();
  }

  public btnCancel() {
    this.redirectToList();
  }

  private redirectToList() {
    this.router.navigateByUrl('/documentosenviados');
  }
}
