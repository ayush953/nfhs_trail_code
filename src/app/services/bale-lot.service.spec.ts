import { TestBed } from '@angular/core/testing';

import { BaleLotService } from './bale-lot.service';

describe('BaleLotService', () => {
  let service: BaleLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaleLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
