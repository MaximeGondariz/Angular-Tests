import { TestBed } from '@angular/core/testing';

import { CanQuitGuard } from './can-quit.guard';

describe('CanQuitGuard', () => {
  let guard: CanQuitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanQuitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
