import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewdetailComponent } from './mobile-viewdetail.component';

describe('MobileViewdetailComponent', () => {
  let component: MobileViewdetailComponent;
  let fixture: ComponentFixture<MobileViewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileViewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileViewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
