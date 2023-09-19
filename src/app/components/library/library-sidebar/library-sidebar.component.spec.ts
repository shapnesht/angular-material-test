import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySidebarComponent } from './library-sidebar.component';

describe('LibrarySidebarComponent', () => {
  let component: LibrarySidebarComponent;
  let fixture: ComponentFixture<LibrarySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarySidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
