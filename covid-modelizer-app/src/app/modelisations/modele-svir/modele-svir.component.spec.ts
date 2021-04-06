import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleSvirComponent } from './modele-svir.component';

describe('ModeleSvirComponent', () => {
  let component: ModeleSvirComponent;
  let fixture: ComponentFixture<ModeleSvirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleSvirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleSvirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
