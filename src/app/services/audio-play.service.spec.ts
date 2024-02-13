import { TestBed } from '@angular/core/testing';

import { AudioPlayService } from './audio-play.service';

describe('AudioPlayService', () => {
  let service: AudioPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
