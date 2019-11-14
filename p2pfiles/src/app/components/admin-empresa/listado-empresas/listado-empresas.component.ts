import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {

  dtOptions: any = {};

  constructor(private http: Http, private empresaSrv: EmpresasService) { }

  ngOnInit() {
    this.dtOptions = {
      ajax: '/assets/data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      dom: 'Bfrtip',
      buttons: ['excel']
    };     
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
