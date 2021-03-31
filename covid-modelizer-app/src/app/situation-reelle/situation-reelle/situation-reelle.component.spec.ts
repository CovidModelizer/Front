import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationReelleComponent } from './situation-reelle.component';

describe('SituationReelleComponent', () => {
  let component: SituationReelleComponent;
  let fixture: ComponentFixture<SituationReelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationReelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationReelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
