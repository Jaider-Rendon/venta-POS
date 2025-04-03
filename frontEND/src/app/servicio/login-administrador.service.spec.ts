import { TestBed } from '@angular/core/testing';

import { LoginAdministradorService } from './login-administrador.service';

describe('LoginAdministradorService', () => {
  let service: LoginAdministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
