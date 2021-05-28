import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCamisetasComponent } from './listar-camisetas.component';

describe('ListarCamisetasComponent', () => {
  let component: ListarCamisetasComponent;
  let fixture: ComponentFixture<ListarCamisetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCamisetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCamisetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
