import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBaleDetailsComponent } from './view-bale-details.component';

describe('ViewBaleDetailsComponent', () => {
  let component: ViewBaleDetailsComponent;
  let fixture: ComponentFixture<ViewBaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBaleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
