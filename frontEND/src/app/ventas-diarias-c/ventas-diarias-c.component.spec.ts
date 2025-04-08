import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDiariasCComponent } from './ventas-diarias-c.component';

describe('VentasDiariasCComponent', () => {
  let component: VentasDiariasCComponent;
  let fixture: ComponentFixture<VentasDiariasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasDiariasCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasDiariasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
