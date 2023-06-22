import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleWomenPerHhComponent } from './eligible-women-per-hh.component';

describe('EligibleWomenPerHhComponent', () => {
  let component: EligibleWomenPerHhComponent;
  let fixture: ComponentFixture<EligibleWomenPerHhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleWomenPerHhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibleWomenPerHhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
