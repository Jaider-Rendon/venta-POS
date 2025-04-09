import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMensualesCComponent } from './ventas-mensuales-c.component';

describe('VentasMensualesCComponent', () => {
  let component: VentasMensualesCComponent;
  let fixture: ComponentFixture<VentasMensualesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasMensualesCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasMensualesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
