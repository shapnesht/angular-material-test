import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDueDateAlertComponent } from './send-due-date-alert.component';

describe('SendDueDateAlertComponent', () => {
  let component: SendDueDateAlertComponent;
  let fixture: ComponentFixture<SendDueDateAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDueDateAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendDueDateAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
