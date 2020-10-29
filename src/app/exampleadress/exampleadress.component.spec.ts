import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleadressComponent } from './exampleadress.component';

describe('ExampleadressComponent', () => {
  let component: ExampleadressComponent;
  let fixture: ComponentFixture<ExampleadressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleadressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
