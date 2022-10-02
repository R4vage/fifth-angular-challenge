import { TestBed } from '@angular/core/testing';

import { PricerService } from './pricer.service';

describe('PricerService', () => {
  let service: PricerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
