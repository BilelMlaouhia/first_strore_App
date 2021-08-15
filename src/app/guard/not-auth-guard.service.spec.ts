import { TestBed } from '@angular/core/testing';

import { NotAuthGuardService } from './not-auth-guard.service';

describe('NotAuthGuardService', () => {
  let service: NotAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
