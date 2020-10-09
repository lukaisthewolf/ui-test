import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatAccordion} from '@angular/material/expansion';
import { Question } from '../question';

/**
 * Component which displays the list of questions in an accordion.
 * It uses the angular material component 'mat-accordion'
 */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion-animations.scss', './accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() questions: Array<Question>;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Used for improving ngFor directive; called for every question displayed.
   * @param index The index of the question
   * @param question The question
   * @return An index to be used by ngFor for the question received as parameter
   */
  trackByFunction(index: number, question: Question): number {
    return index;
  }
}
