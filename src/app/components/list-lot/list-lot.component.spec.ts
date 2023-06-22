import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLotComponent } from './list-lot.component';

describe('ListLotComponent', () => {
  let component: ListLotComponent;
  let fixture: ComponentFixture<ListLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
