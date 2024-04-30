import { TestBed } from '@angular/core/testing';

import { TeachersService } from './teachers.service';
import {HttpClientModule} from "@angular/common/http";

describe('TeachersService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(TeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
