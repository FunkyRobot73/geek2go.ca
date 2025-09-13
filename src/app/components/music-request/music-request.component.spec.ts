import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRequestComponent } from './music-request.component';

describe('MusicRequestComponent', () => {
  let component: MusicRequestComponent;
  let fixture: ComponentFixture<MusicRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
