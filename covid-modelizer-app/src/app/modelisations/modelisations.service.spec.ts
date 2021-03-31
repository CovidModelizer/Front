import { TestBed } from '@angular/core/testing';

import { ModelisationsService } from './modelisations.service';

describe('ModelisationsService', () => {
  let service: ModelisationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelisationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
