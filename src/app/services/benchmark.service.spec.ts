import { TestBed } from '@angular/core/testing';

import { BenchmarkService } from './benchmark.service';

describe('BenchmarksService', () => {
  let service: BenchmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenchmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
