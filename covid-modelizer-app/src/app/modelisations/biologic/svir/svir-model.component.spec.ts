import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SvirModelComponent} from './svir-model.component';

describe('ModeleSvirComponent', () => {
  let component: SvirModelComponent;
  let fixture: ComponentFixture<SvirModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvirModelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvirModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
