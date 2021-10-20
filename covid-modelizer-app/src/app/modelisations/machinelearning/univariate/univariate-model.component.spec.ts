import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UnivariateModelComponent} from './univariate-model.component';

describe('ModeleLineaireComponent', () => {
  let component: UnivariateModelComponent;
  let fixture: ComponentFixture<UnivariateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnivariateModelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivariateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
