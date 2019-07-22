import { TestBed } from '@angular/core/testing';

import { TargetpriceService } from './targetprice.service';

describe('TargetpriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetpriceService = TestBed.get(TargetpriceService);
    expect(service).toBeTruthy();
  });
});
