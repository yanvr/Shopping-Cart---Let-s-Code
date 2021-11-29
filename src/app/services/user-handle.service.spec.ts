import { TestBed } from '@angular/core/testing';

import { UserHandleService } from './user-handle.service';

describe('UserHandleService', () => {
  let service: UserHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
