import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhcompletionRateTeamwiseComponent } from './hhcompletion-rate-teamwise.component';

describe('HhcompletionRateTeamwiseComponent', () => {
  let component: HhcompletionRateTeamwiseComponent;
  let fixture: ComponentFixture<HhcompletionRateTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhcompletionRateTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhcompletionRateTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
