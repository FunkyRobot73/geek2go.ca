import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TechGalleryComponent } from './tech-gallery.component';

describe('TechGalleryComponent', () => {
  let component: TechGalleryComponent;
  let fixture: ComponentFixture<TechGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechGalleryComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
