import { TestBed } from '@angular/core/testing';

import { ReportHoursService } from './report-hours.service';

describe('ReportHoursService', () => {
  let service: ReportHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
