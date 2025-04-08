import { TestBed } from '@angular/core/testing';

import { ProductosTipoService } from './productos-tipo.service';

describe('ProductosTipoService', () => {
  let service: ProductosTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
