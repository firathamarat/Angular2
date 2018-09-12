/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginRoutingServiceService } from './login-routing-service.service';

describe('LoginRoutingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRoutingServiceService]
    });
  });

  it('should ...', inject([LoginRoutingServiceService], (service: LoginRoutingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
