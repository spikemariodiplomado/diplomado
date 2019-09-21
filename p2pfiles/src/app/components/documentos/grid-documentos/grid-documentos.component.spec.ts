import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDocumentosComponent } from './grid-documentos.component';

describe('GridDocumentosComponent', () => {
  let component: GridDocumentosComponent;
  let fixture: ComponentFixture<GridDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
