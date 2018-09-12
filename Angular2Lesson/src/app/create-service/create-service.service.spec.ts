/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateServiceService } from './create-service.service';

describe('CreateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateServiceService]
    });
  });

  it('should ...', inject([CreateServiceService], (service: CreateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
