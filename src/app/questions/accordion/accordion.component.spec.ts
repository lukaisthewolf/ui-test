import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`Should contain 'mat-accordion' component with the right input params`, () => {
    it('should contain mat-accordion component', () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-accordion')).toBeTruthy();
    });

    it(`should contain mat-accordion component with attribute 'displayMode' set to 'flat'`, () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-accordion[displayMode=flat]')).toBeTruthy();
    });

    it(`should contain mat-accordion component with attribute 'hideToggle' set to 'true'`, () => {
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-accordion[hideToggle=true]')).toBeTruthy();
    });
  });

  describe(`Should contain one 'mat-expression-panel' component for every question`, () => {
    it(`should contain 3 'mat-expansion-panel' components for 3 questions`, () => {
      component.questions = [
        {id: '1', question: 'test question 1', answer: 'test answer 1'},
        {id: '2', question: 'test question 2', answer: 'test answer 2'},
        {id: '3', question: 'test question 3', answer: 'test answer 3'}];
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelectorAll('mat-expansion-panel').length).toEqual(3);
    });

    it(`should not contain any 'mat-expansion-panel' component if there is no question`, () => {
      component.questions = [];
      const compiled = fixture.nativeElement;

      expect(compiled.querySelectorAll('mat-expansion-panel').length).toEqual(0);
    });

    it(`should not contain any 'mat-expansion-panel' component if 'question' variable is undefined`, () => {
      component.questions = undefined;
      const compiled = fixture.nativeElement;

      expect(compiled.querySelectorAll('mat-expansion-panel').length).toEqual(0);
    });
  });

  describe('Every question should contain Q{index}, its title and its answer', () => {
    it(`every question should contain 'mat-panel-title' component`, () => {
      component.questions =  [{id: '1', question: 'test question 1', answer: 'test answer 1'}];
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelectorAll('mat-panel-title').length).toEqual(1);
    });

    it(`every question header should contain string Q followed by its index`, () => {
      component.questions =  [{id: '1', question: 'test question 1', answer: 'test answer 1'}];
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-panel-title .question-index').textContent).toEqual('Q1');
    });

    it(`every question header should contain a string with its title`, () => {
      component.questions =  [{id: '1', question: 'test question 1', answer: 'test answer 1'}];
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-panel-title').textContent).toContain('test question 1');
    });

    it(`every expanded question should contain a string with its answer`, () => {
      component.questions =  [{id: '1', question: 'test question 1', answer: 'test answer 1'}];
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('mat-expansion-panel').textContent).toContain('test answer 1');
    });
  });
});
