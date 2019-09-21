import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEmpresasComponent } from './listado-empresas.component';

describe('ListadoEmpresasComponent', () => {
  let component: ListadoEmpresasComponent;
  let fixture: ComponentFixture<ListadoEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
