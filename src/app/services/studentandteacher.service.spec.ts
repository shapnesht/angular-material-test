import { TestBed } from '@angular/core/testing';

import { StudentandteacherService } from './studentandteacher.service';

describe('StudentandteacherService', () => {
  let service: StudentandteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentandteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
