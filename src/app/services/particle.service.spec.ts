import { TestBed } from '@angular/core/testing';

import { ParticleService } from './particle.service';

describe('ParticleService', () => {
  let service: ParticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
