import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjPackagesComponent } from './dj-packages.component';

describe('DjPackagesComponent', () => {
  let component: DjPackagesComponent;
  let fixture: ComponentFixture<DjPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
