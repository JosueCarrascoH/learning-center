import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
