import { TestBed } from '@angular/core/testing';

import { PhotoBoothService } from './photo-booth.service';

describe('PhotoBoothService', () => {
  let service: PhotoBoothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoBoothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
