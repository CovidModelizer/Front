import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeFaireVaccinerComponent } from './se-faire-vacciner.component';

describe('SeFaireVaccinerComponent', () => {
  let component: SeFaireVaccinerComponent;
  let fixture: ComponentFixture<SeFaireVaccinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeFaireVaccinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeFaireVaccinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
