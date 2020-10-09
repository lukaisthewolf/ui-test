import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
import { HttpClient } from '@angular/common/http';

describe('QuestionsService', () => {
  let service: QuestionsService;
  const httpClientServiceMock = jasmine.createSpyObj(['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientServiceMock }]
    });
    service = TestBed.inject(QuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQuestions', () => {
    it('should call HttpClient service - get method with the path to the JSON file as a parameter', () => {
      service.getQuestions();

      expect(httpClientServiceMock.get).toHaveBeenCalledWith('../../assets/mocks/DataSource.json');
    });
  });
});
