/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {appFetchDataService} from '../Services/appFetch-data.service';

describe('FetchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [appFetchDataService]
    });
  });

  it('should ...', inject([appFetchDataService], (service: appFetchDataService) => {
    expect(service).toBeTruthy();
  }));
});
