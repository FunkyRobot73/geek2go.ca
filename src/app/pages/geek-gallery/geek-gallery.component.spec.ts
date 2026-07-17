import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GeekGalleryComponent } from './geek-gallery.component';

describe('GeekGalleryComponent', () => {
  let component: GeekGalleryComponent;
  let fixture: ComponentFixture<GeekGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeekGalleryComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
