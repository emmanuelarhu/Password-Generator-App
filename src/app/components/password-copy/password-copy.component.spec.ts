import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCopyComponent } from './password-copy.component';

describe('PasswordCopyComponent', () => {
  let component: PasswordCopyComponent;
  let fixture: ComponentFixture<PasswordCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
