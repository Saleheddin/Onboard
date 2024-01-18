import { TestBed } from '@angular/core/testing';

import { OnboardapiService } from './onboardapi.service';

describe('OnboardapiService', () => {
  let service: OnboardapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
