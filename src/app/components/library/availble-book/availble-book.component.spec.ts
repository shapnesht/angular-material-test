import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailbleBookComponent } from './availble-book.component';

describe('AvailbleBookComponent', () => {
  let component: AvailbleBookComponent;
  let fixture: ComponentFixture<AvailbleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailbleBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailbleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
