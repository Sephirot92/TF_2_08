import { TestBed } from '@angular/core/testing';

import { NewsApiClientService } from './news-api-client.service';

describe('NewsApiClientService', () => {
  let service: NewsApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
