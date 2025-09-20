import { TestBed } from '@angular/core/testing';

import { ItservicesService } from './itservices.service';

describe('ItservicesService', () => {
  let service: ItservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
