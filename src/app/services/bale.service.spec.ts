import { TestBed } from '@angular/core/testing';

import { BaleService } from './bale.service';

describe('BaleService', () => {
  let service: BaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
