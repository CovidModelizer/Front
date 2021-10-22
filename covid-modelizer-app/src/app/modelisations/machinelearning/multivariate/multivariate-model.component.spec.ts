import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MultivariateModelComponent} from './multivariate-model.component';

describe('ModeleMachineLearningComponent', () => {
  let component: MultivariateModelComponent;
  let fixture: ComponentFixture<MultivariateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultivariateModelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultivariateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
