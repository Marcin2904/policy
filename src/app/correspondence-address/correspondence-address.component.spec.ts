import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceAddressComponent } from './correspondence-address.component';

describe('CorrespondenceAddressComponent', () => {
  let component: CorrespondenceAddressComponent;
  let fixture: ComponentFixture<CorrespondenceAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondenceAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
