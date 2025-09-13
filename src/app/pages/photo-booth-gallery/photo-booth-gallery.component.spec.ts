import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoothGalleryComponent } from './photo-booth-gallery.component';

describe('PhotoBoothGalleryComponent', () => {
  let component: PhotoBoothGalleryComponent;
  let fixture: ComponentFixture<PhotoBoothGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoothGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoothGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
