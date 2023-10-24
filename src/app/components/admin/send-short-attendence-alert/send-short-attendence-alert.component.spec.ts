import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendShortAttendenceAlertComponent } from './send-short-attendence-alert.component';

describe('SendShortAttendenceAlertComponent', () => {
  let component: SendShortAttendenceAlertComponent;
  let fixture: ComponentFixture<SendShortAttendenceAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendShortAttendenceAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendShortAttendenceAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
