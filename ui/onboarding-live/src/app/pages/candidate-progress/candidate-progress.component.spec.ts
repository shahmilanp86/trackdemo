import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProgressComponent } from './candidate-progress.component';

describe('CandidateProgressComponent', () => {
  let component: CandidateProgressComponent;
  let fixture: ComponentFixture<CandidateProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
