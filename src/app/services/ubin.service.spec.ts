import { TestBed } from '@angular/core/testing';

import { UbinService } from './ubin.service';

describe('UbinService', () => {
  let service: UbinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
