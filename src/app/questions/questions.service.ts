import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  private dataSourcePath = '../../assets/mocks/DataSource.json';

  constructor(private httpClient: HttpClient) {}

  /**
   * Returns an Observable object with the data stored in assets/mocks/DataSource.json.
   */
  getQuestions(): Observable<object> {
    return this.httpClient.get(this.dataSourcePath);
  }
}
