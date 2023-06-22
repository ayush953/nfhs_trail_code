import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleMenPerHhComponent } from './eligible-men-per-hh.component';

describe('EligibleMenPerHhComponent', () => {
  let component: EligibleMenPerHhComponent;
  let fixture: ComponentFixture<EligibleMenPerHhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleMenPerHhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleMenPerHhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
