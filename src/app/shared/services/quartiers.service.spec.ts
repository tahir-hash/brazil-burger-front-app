import { TestBed } from '@angular/core/testing';

import { QuartiersService } from './quartiers.service';

describe('QuartiersService', () => {
  let service: QuartiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
