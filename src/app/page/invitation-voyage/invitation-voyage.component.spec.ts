import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationVoyageComponent } from './invitation-voyage.component';

describe('InvitationVoyageComponent', () => {
  let component: InvitationVoyageComponent;
  let fixture: ComponentFixture<InvitationVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
