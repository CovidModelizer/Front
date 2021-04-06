import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleSirComponent } from './modele-sir.component';

describe('ModeleSirComponent', () => {
  let component: ModeleSirComponent;
  let fixture: ComponentFixture<ModeleSirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleSirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleSirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
