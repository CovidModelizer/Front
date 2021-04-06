import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesReellesComponent } from './donnees-reelles.component';

describe('DonneesReellesComponent', () => {
  let component: DonneesReellesComponent;
  let fixture: ComponentFixture<DonneesReellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesReellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesReellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
