import { TestBed } from '@angular/core/testing';

import { CompatibilidadService } from './compatibilidad.service';

describe('CompatibilidadService', () => {
  let service: CompatibilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompatibilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
