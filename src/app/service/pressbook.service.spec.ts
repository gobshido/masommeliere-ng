import { TestBed } from '@angular/core/testing';

import { PressbookService } from './pressbook.service';

describe('PressbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PressbookService = TestBed.get(PressbookService);
    expect(service).toBeTruthy();
  });
});
