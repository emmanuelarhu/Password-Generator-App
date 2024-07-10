import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthDisplayComponent } from './password-strength-display.component';

describe('PasswordStrengthDisplayComponent', () => {
  let component: PasswordStrengthDisplayComponent;
  let fixture: ComponentFixture<PasswordStrengthDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
