import { TestBed } from '@angular/core/testing';

import { ContactuserService } from './contactuser.service';

describe('ContactuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactuserService = TestBed.get(ContactuserService);
    expect(service).toBeTruthy();
  });
});
