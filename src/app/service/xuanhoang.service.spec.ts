import { TestBed } from '@angular/core/testing';

import { XuanhoangService } from './xuanhoang.service';

describe('XuanhoangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XuanhoangService = TestBed.get(XuanhoangService);
    expect(service).toBeTruthy();
  });
});
