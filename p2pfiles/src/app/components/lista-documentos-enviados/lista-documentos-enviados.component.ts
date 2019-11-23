import { Component, OnDestroy, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-documentos-enviados',
  templateUrl: './listado-documentos-enviados.component.html',
  styleUrls: ['./listado-documentos-enviados.component.css']
})
export class ListaComponent implements OnInit, AfterViewInit {

  dtOptions: any = {};

  constructor(private http: Http, private empresaSrv: DocumentosService, private renderer: Renderer, private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      ajax: '/assets/data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        }, {
          title: 'Nombre Empresa Envio',
          data: 'nombreEmpresaEnvio'
        }, {
          title: 'Fecha',
          data: 'fecha'
        }, {
          title: 'Hora',
          data: 'hora'
        }, {
          title: 'Estado',
          data: 'estado'
        },{
          data: 'id',
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            // return '<button>Ver Detalle</button>';
            return '<a href="/documento/'+data+'"><span>Detalle</span></a>'
          }
        }
      ],
      dom: 'Bfrtip',
      buttons: ['excel'],
      select: true
    };     
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  public btnSubir() {
    this.router.navigate(['/documento']);
  }

}
