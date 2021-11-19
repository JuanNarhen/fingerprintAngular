import { TestBed } from '@angular/core/testing';

import { MyUUIDService } from './my-uuid.service';

describe('MyUUIDService', () => {
  let service: MyUUIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUUIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
