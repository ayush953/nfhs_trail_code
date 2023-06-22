import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomenPerHhMemberwiseComponent } from './eligible-women-per-hh-memberwise.component';

describe('EligibleWomenPerHhMemberwiseComponent', () => {
  let component: EligibleWomenPerHhMemberwiseComponent;
  let fixture: ComponentFixture<EligibleWomenPerHhMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomenPerHhMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomenPerHhMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
