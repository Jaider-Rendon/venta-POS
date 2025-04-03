import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmininComponent } from './login-adminin.component';

describe('LoginAdmininComponent', () => {
  let component: LoginAdmininComponent;
  let fixture: ComponentFixture<LoginAdmininComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdmininComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAdmininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
