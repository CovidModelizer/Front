import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsGeneralesComponent } from './informations-generales.component';

describe('InformationsGeneralesComponent', () => {
  let component: InformationsGeneralesComponent;
  let fixture: ComponentFixture<InformationsGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationsGeneralesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
