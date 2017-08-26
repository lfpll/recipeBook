import { TestBed, inject } from '@angular/core/testing';

import { RecipeResolveService } from './recipe-resolve.service';

describe('RecipeResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeResolveService]
    });
  });

  it('should be created', inject([RecipeResolveService], (service: RecipeResolveService) => {
    expect(service).toBeTruthy();
  }));
});
