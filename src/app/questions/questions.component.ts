import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { QuestionsService } from './questions.service';
import { Question } from './question';

/**
 * Component which displays the data required by design:
 *  - the title
 *  - the separator
 *  - the list of questions
 * This component manages the loading state and the error state:
 *  - a skeleton loader is displayed until the information is ready from the backend
 *  - a dummy error message is displayed if the HTTP request fails
 */
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Input() title: string;

  /**
   * Observable object synchronized with the template and with the backend data.
   * When backend data is ready this object contains the questions to be displayed.
   */
  questions$: Observable<Array<Question>|undefined>;

  /**
   * Observable object updated when fetching data from the backend fails.
   */
  error$: Subject<boolean> = new Subject();

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questions$ = this.questionsService.getQuestions().pipe(
      catchError( (error: Error) => {
        // HTTP request failed
        throwError(error.message);
        this.error$.next(true);
        return of(undefined);
      })
    );
  }

}
