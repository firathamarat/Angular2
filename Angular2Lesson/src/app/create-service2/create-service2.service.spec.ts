/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateService2Service } from './create-service2.service';

describe('CreateService2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateService2Service]
    });
  });

  it('should ...', inject([CreateService2Service], (service: CreateService2Service) => {
    expect(service).toBeTruthy();
  }));
});
