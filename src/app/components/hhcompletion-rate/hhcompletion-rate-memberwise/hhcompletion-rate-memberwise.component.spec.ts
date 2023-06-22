import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhcompletionRateMemberwiseComponent } from './hhcompletion-rate-memberwise.component';

describe('HhcompletionRateMemberwiseComponent', () => {
  let component: HhcompletionRateMemberwiseComponent;
  let fixture: ComponentFixture<HhcompletionRateMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhcompletionRateMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhcompletionRateMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
