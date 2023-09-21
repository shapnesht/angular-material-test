import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBorrowBookComponent } from './most-borrow-book.component';

describe('MostBorrowBookComponent', () => {
  let component: MostBorrowBookComponent;
  let fixture: ComponentFixture<MostBorrowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostBorrowBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostBorrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
