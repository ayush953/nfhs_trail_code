import { TestBed } from '@angular/core/testing';

import { BalesTrackingService } from './bales-tracking.service';

describe('BalesTrackingService', () => {
  let service: BalesTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalesTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
