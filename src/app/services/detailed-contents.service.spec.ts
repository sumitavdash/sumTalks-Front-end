import { TestBed } from '@angular/core/testing';

import { DetailedContentsService } from './detailed-contents.service';

describe('DetailedContentsService', () => {
  let service: DetailedContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
