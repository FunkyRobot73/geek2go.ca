import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DjGalleryComponent } from './dj-gallery.component';

describe('DjGalleryComponent', () => {
  let component: DjGalleryComponent;
  let fixture: ComponentFixture<DjGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjGalleryComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
