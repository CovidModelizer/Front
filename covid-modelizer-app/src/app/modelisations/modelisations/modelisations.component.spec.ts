import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelisationsComponent} from './modelisations.component';

describe('ModelisationsComponent', () => {
  let component: ModelisationsComponent;
  let fixture: ComponentFixture<ModelisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelisationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
