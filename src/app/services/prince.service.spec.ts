import { TestBed } from '@angular/core/testing';

import { PrinceService } from './prince.service';

describe('PrinceService', () => {
  let service: PrinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
