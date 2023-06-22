import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomenPerHhTeamwiseComponent } from './eligible-women-per-hh-teamwise.component';

describe('EligibleWomenPerHhTeamwiseComponent', () => {
  let component: EligibleWomenPerHhTeamwiseComponent;
  let fixture: ComponentFixture<EligibleWomenPerHhTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomenPerHhTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomenPerHhTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
