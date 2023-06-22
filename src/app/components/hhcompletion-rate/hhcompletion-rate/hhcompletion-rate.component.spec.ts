import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhcompletionRateComponent } from './hhcompletion-rate.component';

describe('HhcompletionRateComponent', () => {
  let component: HhcompletionRateComponent;
  let fixture: ComponentFixture<HhcompletionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhcompletionRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhcompletionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
