import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleMenPerHhTeamwiseComponent } from './eligible-men-per-hh-teamwise.component';

describe('EligibleMenPerHhTeamwiseComponent', () => {
  let component: EligibleMenPerHhTeamwiseComponent;
  let fixture: ComponentFixture<EligibleMenPerHhTeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleMenPerHhTeamwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleMenPerHhTeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
