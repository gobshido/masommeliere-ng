import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineShopperComponent } from './wine-shopper.component';

describe('WineShopperComponent', () => {
  let component: WineShopperComponent;
  let fixture: ComponentFixture<WineShopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineShopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
