import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleLineaireComponent } from './modele-lineaire.component';

describe('ModeleLineaireComponent', () => {
  let component: ModeleLineaireComponent;
  let fixture: ComponentFixture<ModeleLineaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleLineaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleLineaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
