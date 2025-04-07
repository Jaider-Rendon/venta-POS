import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFechasComponent } from './venta-fechas.component';

describe('VentaFechasComponent', () => {
  let component: VentaFechasComponent;
  let fixture: ComponentFixture<VentaFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaFechasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentaFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
