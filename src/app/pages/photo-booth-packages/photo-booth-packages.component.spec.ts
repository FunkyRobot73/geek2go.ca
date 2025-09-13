import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoothPackagesComponent } from './photo-booth-packages.component';

describe('PhotoBoothPackagesComponent', () => {
  let component: PhotoBoothPackagesComponent;
  let fixture: ComponentFixture<PhotoBoothPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoothPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoothPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
