import { TestBed } from '@angular/core/testing';

import { GoolgeAnalyticsService } from './goolge-analytics.service';

describe('GoolgeAnalyticsService', () => {
  let service: GoolgeAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoolgeAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
