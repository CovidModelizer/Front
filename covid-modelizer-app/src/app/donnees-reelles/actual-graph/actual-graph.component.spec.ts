import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualGraphComponent } from './actual-graph.component';

describe('ActualGraphComponent', () => {
  let component: ActualGraphComponent;
  let fixture: ComponentFixture<ActualGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
