import { TestBed } from '@angular/core/testing';

import { LoginVendedorService } from './login-vendedor.service';

describe('LoginVendedorService', () => {
  let service: LoginVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
