import { TestBed } from '@angular/core/testing';

import { DjPackagesService } from './dj-packages.service';

describe('DjPackagesService', () => {
  let service: DjPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
