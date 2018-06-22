import { TestBed, inject } from '@angular/core/testing';

import { Lab7Service } from './lab7.service';

describe('Lab7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lab7Service]
    });
  });

  it('should be created', inject([Lab7Service], (service: Lab7Service) => {
    expect(service).toBeTruthy();
  }));
});
