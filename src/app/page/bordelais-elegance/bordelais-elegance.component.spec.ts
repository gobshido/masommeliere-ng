import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordelaisEleganceComponent } from './bordelais-elegance.component';

describe('BordelaisEleganceComponent', () => {
  let component: BordelaisEleganceComponent;
  let fixture: ComponentFixture<BordelaisEleganceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordelaisEleganceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordelaisEleganceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
