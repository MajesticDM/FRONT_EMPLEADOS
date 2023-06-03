import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAddEditComponent } from './empleado-add-edit.component';

describe('EmpleadoAddEditComponent', () => {
  let component: EmpleadoAddEditComponent;
  let fixture: ComponentFixture<EmpleadoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoAddEditComponent]
    });
    fixture = TestBed.createComponent(EmpleadoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
