import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotReturnBookComponent } from './show-not-return-book.component';

describe('ShowNotReturnBookComponent', () => {
  let component: ShowNotReturnBookComponent;
  let fixture: ComponentFixture<ShowNotReturnBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNotReturnBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNotReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
