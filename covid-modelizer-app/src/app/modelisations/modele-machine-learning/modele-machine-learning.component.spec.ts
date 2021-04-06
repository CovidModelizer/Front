import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleMachineLearningComponent } from './modele-machine-learning.component';

describe('ModeleMachineLearningComponent', () => {
  let component: ModeleMachineLearningComponent;
  let fixture: ComponentFixture<ModeleMachineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleMachineLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
