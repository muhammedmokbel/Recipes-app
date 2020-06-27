import { TestBed } from '@angular/core/testing';

import { MyhomeguardGuard } from './myhomeguard.guard';

describe('MyhomeguardGuard', () => {
  let guard: MyhomeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyhomeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
