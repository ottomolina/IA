import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebcamNComponent } from './view-webcam-n.component';

describe('ViewWebcamNComponent', () => {
  let component: ViewWebcamNComponent;
  let fixture: ComponentFixture<ViewWebcamNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWebcamNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWebcamNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
