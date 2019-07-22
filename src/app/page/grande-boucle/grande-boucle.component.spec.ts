import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeBoucleComponent } from './grande-boucle.component';

describe('GrandeBoucleComponent', () => {
  let component: GrandeBoucleComponent;
  let fixture: ComponentFixture<GrandeBoucleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandeBoucleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeBoucleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
