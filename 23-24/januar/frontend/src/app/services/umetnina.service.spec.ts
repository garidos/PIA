import { TestBed } from '@angular/core/testing';

import { UmetninaService } from './umetnina.service';

describe('UmetninaService', () => {
  let service: UmetninaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmetninaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
