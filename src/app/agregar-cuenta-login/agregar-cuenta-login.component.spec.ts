import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCuentaLoginComponent } from './agregar-cuenta-login.component';

describe('AgregarCuentaLoginComponent', () => {
  let component: AgregarCuentaLoginComponent;
  let fixture: ComponentFixture<AgregarCuentaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCuentaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCuentaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
