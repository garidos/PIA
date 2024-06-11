import { TestBed } from '@angular/core/testing';

import { PutnikService } from './putnik.service';

describe('PutnikService', () => {
  let service: PutnikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutnikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
