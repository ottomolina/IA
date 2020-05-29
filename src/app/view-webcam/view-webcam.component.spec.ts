import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebcamComponent } from './view-webcam.component';

describe('ViewWebcamComponent', () => {
  let component: ViewWebcamComponent;
  let fixture: ComponentFixture<ViewWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
