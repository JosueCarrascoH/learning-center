import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';
import {HttpClientModule} from "@angular/common/http";

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
