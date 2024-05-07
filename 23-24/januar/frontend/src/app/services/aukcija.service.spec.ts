import { TestBed } from '@angular/core/testing';

import { AukcijaService } from './aukcija.service';

describe('AukcijaService', () => {
  let service: AukcijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AukcijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
