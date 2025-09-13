import { TestBed } from '@angular/core/testing';

import { MusicRequestService } from './music-request.service';

describe('MusicRequestService', () => {
  let service: MusicRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
