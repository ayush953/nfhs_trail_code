import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLotDetailsComponent } from './view-lot-details.component';

describe('ViewLotDetailsComponent', () => {
  let component: ViewLotDetailsComponent;
  let fixture: ComponentFixture<ViewLotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLotDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
