import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotEnrollmentNumberComponent } from './allot-enrollment-number.component';

describe('AllotEnrollmentNumberComponent', () => {
  let component: AllotEnrollmentNumberComponent;
  let fixture: ComponentFixture<AllotEnrollmentNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotEnrollmentNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllotEnrollmentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
