import { TestBed } from '@angular/core/testing';

import { TestNpmLibService } from './test-npm-lib.service';

describe('TestNpmLibService', () => {
  let service: TestNpmLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNpmLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
