import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaexpedienteComponent } from './busquedaexpediente.component';

describe('BusquedaexpedienteComponent', () => {
  let component: BusquedaexpedienteComponent;
  let fixture: ComponentFixture<BusquedaexpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaexpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
