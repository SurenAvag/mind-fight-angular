import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSingleComponent } from './subject-single.component';

describe('SubjectSingleComponent', () => {
  let component: SubjectSingleComponent;
  let fixture: ComponentFixture<SubjectSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
