import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTipoComponent } from './productos-tipo.component';

describe('ProductosTipoComponent', () => {
  let component: ProductosTipoComponent;
  let fixture: ComponentFixture<ProductosTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosTipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
