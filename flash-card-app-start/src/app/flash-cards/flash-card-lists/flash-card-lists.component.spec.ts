import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardListsComponent } from './flash-card-lists.component';

describe('FlashCardListsComponent', () => {
  let component: FlashCardListsComponent;
  let fixture: ComponentFixture<FlashCardListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
