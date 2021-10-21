import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SirModelComponent} from './sir-model.component';

describe('ModeleSirComponent', () => {
  let component: SirModelComponent;
  let fixture: ComponentFixture<SirModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SirModelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
