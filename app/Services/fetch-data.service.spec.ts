/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {FetchDataService} from '../Services/fetch-data.service';

describe('FetchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDataService]
    });
  });

  it('should ...', inject([FetchDataService], (service: FetchDataService) => {
    expect(service).toBeTruthy();
  }));
});
