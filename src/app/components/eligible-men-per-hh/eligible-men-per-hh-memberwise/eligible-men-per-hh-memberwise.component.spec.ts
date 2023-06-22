import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleMenPerHhMemberwiseComponent } from './eligible-men-per-hh-memberwise.component';

describe('EligibleMenPerHhMemberwiseComponent', () => {
  let component: EligibleMenPerHhMemberwiseComponent;
  let fixture: ComponentFixture<EligibleMenPerHhMemberwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleMenPerHhMemberwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleMenPerHhMemberwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
