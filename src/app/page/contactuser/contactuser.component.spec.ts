import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuserComponent } from './contactuser.component';

describe('ContactuserComponent', () => {
  let component: ContactuserComponent;
  let fixture: ComponentFixture<ContactuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
