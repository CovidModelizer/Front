import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ActualDataComponent} from './actual-data.component';

describe('ActualDataComponent', () => {
  let component: ActualDataComponent;
  let fixture: ComponentFixture<ActualDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualDataComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
