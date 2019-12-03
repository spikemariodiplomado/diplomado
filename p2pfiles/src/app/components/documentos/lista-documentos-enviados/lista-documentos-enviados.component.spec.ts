import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocumentosEnviadosComponent } from './lista-documentos-enviados.component';

describe('ListaDocumentosEnviadosComponent', () => {
  let component: ListaDocumentosEnviadosComponent;
  let fixture: ComponentFixture<ListaDocumentosEnviadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDocumentosEnviadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocumentosEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
