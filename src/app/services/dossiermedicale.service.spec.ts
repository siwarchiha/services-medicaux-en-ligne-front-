import { TestBed } from '@angular/core/testing';

import { DossiermedicaleService } from './dossiermedicale.service';

describe('DossiermedicaleService', () => {
  let service: DossiermedicaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossiermedicaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
