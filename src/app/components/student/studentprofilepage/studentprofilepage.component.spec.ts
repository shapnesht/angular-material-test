import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofilepageComponent } from './studentprofilepage.component';

describe('StudentprofilepageComponent', () => {
  let component: StudentprofilepageComponent;
  let fixture: ComponentFixture<StudentprofilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentprofilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
