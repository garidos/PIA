import { TestBed } from '@angular/core/testing';

import { HalaService } from './hala.service';

describe('HalaService', () => {
  let service: HalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
