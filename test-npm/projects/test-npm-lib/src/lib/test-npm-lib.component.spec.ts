import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNpmLibComponent } from './test-npm-lib.component';

describe('TestNpmLibComponent', () => {
  let component: TestNpmLibComponent;
  let fixture: ComponentFixture<TestNpmLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNpmLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNpmLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
