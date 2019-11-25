import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoggerComponent } from './test-logger.component';

describe('TestLoggerComponent', () => {
  let component: TestLoggerComponent;
  let fixture: ComponentFixture<TestLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
