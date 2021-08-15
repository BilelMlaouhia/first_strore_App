import { TestBed } from '@angular/core/testing';

import { UploadStoreService } from './upload-store.service';

describe('UploadStoreService', () => {
  let service: UploadStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
