import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import {QuestionsService} from './questions.service';
import {of} from 'rxjs';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
  const questionsServiceMock = jasmine.createSpyObj(['getQuestions']);
  questionsServiceMock.getQuestions.and.returnValue(of([{}, {}, {}]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsComponent ],
      providers: [
        { provide: QuestionsService, useValue: questionsServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Title', () => {
    it('should display a title', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.title')).toBeTruthy();
    });

    it('should display the title provided as a component input', () => {
      component.title = 'Title Mocked Value';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('.title').textContent).toEqual('Title Mocked Value');
    });

    it('should display a separator after the title', () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('.separator')).toBeTruthy();
    });
  });

  describe('Accordion', () => {
    it('should contain accordion component', () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('app-accordion')).toBeTruthy();
    });
  });

  describe('Getting data from service', () => {
    it('should call getQuestions method from the service', () => {
      expect(questionsServiceMock.getQuestions).toHaveBeenCalled();
    });
  });
});
