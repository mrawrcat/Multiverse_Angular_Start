import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule
      ],
      declarations: [ImageViewComponent]
    });
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display img src and alt', () => {
    const imgSRC = "https://apod.nasa.gov/apod/image/2307/noirlab2321a_ngc1532_1024.jpg";
    const imgAlt = "Galaxies in the River"
    
    component.imageSrc = imgSRC;
    component.imageAlt = imgAlt;
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(imgSRC);
    expect(imgElement.alt).toBe(imgAlt);
  });

  it('should correctly dispaly image description', () => {
    const imgDescription = "Large galaxies grow by eating small ones. Even our own galaxy engages in a sort of galactic cannibalism, absorbing small galaxies that are too close and are captured by the Milky Way's gravity. In fact, the practice is common in the universe and illustrated by this striking pair of interacting galaxies from the banks of the southern constellation Eridanus, The River. Located over 50 million light years away, the large, distorted spiral NGC 1532 is seen locked in a gravitational struggle with dwarf galaxy NGC 1531, a struggle the smaller galaxy will eventually lose. Seen nearly edge-on, spiral NGC 1532 spans about 100,000 light-years. The merging galaxies are captured in this sharp image from the Dark Energy Camera mounted on the National Science Foundation’s Blanco 4-meter Telescope at Cerro Tololo Inter-American Observatory in Chile. The NGC 1532/1531 pair is thought to be similar to the well-studied system of face-on spiral and small companion known as M51.";
    component.imageDescription = imgDescription;
    fixture.detectChanges();
    const pElement : HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(pElement.textContent).toBe(imgDescription);
  });

});
