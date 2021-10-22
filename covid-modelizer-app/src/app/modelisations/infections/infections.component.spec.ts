import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfectionsComponent} from './infections.component';

describe('InfectionsComponent', () => {
  let component: InfectionsComponent;
  let fixture: ComponentFixture<InfectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfectionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
