import { TestBed } from '@angular/core/testing';

import { SituationReelleService } from './situation-reelle.service';

describe('SituationReelleService', () => {
  let service: SituationReelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituationReelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
