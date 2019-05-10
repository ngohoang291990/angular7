import { TestBed } from '@angular/core/testing';

import { NgohoangService } from './ngohoang.service';

describe('NgohoangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgohoangService = TestBed.get(NgohoangService);
    expect(service).toBeTruthy();
  });
});
