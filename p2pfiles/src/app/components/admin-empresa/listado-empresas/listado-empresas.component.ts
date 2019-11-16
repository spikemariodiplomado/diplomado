import { Component, OnDestroy, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit, AfterViewInit {

  dtOptions: any = {};

  constructor(private http: Http, private empresaSrv: EmpresasService, private renderer: Renderer, private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      ajax: '/assets/data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'firstName'
        }, {
          title: 'Last name',
          data: 'lastName'
        }, {
          data: 'id',
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            // return '<button>Ver Detalle</button>';
            return '<a href="/empresa/'+data+'"><span>Detalle</span></a>'
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

  public btnNuevo() {
    this.router.navigate(['/empresa']);
  }

}
