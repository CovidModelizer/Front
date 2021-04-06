import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiliteVaccinComponent } from './eligibilite-vaccin.component';

describe('EligibiliteVaccinComponent', () => {
  let component: EligibiliteVaccinComponent;
  let fixture: ComponentFixture<EligibiliteVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibiliteVaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiliteVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
