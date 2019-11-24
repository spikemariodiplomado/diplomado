import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocumentosRecibidosComponent } from './lista-documentos-recibidos.component';

describe('ListaDocumentosRecibidosComponent', () => {
  let component: ListaDocumentosRecibidosComponent;
  let fixture: ComponentFixture<ListaDocumentosRecibidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDocumentosRecibidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocumentosRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
