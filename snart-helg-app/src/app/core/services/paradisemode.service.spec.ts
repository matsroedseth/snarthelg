import { TestBed, inject } from '@angular/core/testing';

import { ParadiseModeService } from './paradisemode.service';

describe('ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParadiseModeService]
    });
  });

  it('should be created', inject([ParadiseModeService], (service: ParadiseModeService) => {
    expect(service).toBeTruthy();
  }));
});
