import { TestBed } from '@angular/core/testing';

import { PhotoBoothPackagesService } from './photo-booth-packages.service';

describe('PhotoBoothPackagesService', () => {
  let service: PhotoBoothPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoBoothPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
