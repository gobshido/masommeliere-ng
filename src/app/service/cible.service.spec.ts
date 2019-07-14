import { TestBed } from '@angular/core/testing';

import { CibleService } from './cible.service';

describe('CibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CibleService = TestBed.get(CibleService);
    expect(service).toBeTruthy();
  });
});
