import { TestBed } from '@angular/core/testing';

import { PrixService } from './prix.service';

describe('PrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrixService = TestBed.get(PrixService);
    expect(service).toBeTruthy();
  });
});
