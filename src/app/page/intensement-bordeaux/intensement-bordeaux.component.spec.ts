import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensementBordeauxComponent } from './intensement-bordeaux.component';

describe('IntensementBordeauxComponent', () => {
  let component: IntensementBordeauxComponent;
  let fixture: ComponentFixture<IntensementBordeauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensementBordeauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensementBordeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
