import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBorrowingBooksComponent } from './manage-borrowing-books.component';

describe('ManageBorrowingBooksComponent', () => {
  let component: ManageBorrowingBooksComponent;
  let fixture: ComponentFixture<ManageBorrowingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBorrowingBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBorrowingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
