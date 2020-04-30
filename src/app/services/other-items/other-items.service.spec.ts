import { TestBed } from '@angular/core/testing';

import { OtherItemsService } from './other-items.service';

describe('OtherItemsService', () => {
  let service: OtherItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
