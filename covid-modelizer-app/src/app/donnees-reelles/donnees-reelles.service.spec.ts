import { TestBed } from '@angular/core/testing';

import { DonneesReellesService } from './donnees-reelles.service';

describe('DonneesReellesService', () => {
  let service: DonneesReellesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneesReellesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
