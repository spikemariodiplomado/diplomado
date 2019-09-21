import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRelacionComponent } from './form-relacion.component';

describe('FormRelacionComponent', () => {
  let component: FormRelacionComponent;
  let fixture: ComponentFixture<FormRelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
