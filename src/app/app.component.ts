import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'funky-robot';
  profile = {
  nameFull: "Carlos Sousa",
  ownerTitle: "Owner / DJ",
  nameShort: "Carlos",
  nameShort2: "Sousa",
  bio: "Carlos is the owner and lead DJ at Funky Robot. With over 25+ years of experience in the industry, Carlos has a passion for music and entertainment that shines through in every event he handles. He is dedicated to providing exceptional service and creating unforgettable experiences for his clients.",
  bio1: "A family friendly DJ who has been in the Industry for 25+ years. Carlos was born in Toronto and for a while he seemed a little Robotic. It all changed when he heard Super Freak on Tarzan Dan.  He loves groovy tunes but has a soft spot for Gigabytes & Doo-Hickeys.  He eventually found his way to Burlington with the loves of his life...  Ellie, Daisy, Tania and Adele.  ",
  bio2: "Carlos started DJing parties in high school and has been doing it ever since. First working with heavy Vinyl crates, clunky cassettes, and binders & binders of CDs...  Carlos will still have anxiety dreams about cassette not rewinding in time to cue up the next song.  He's happy with digital msuic.  ",
  bio3: "Carlos is a Funky DJ with Funky Tunes, who also loves geek culture, Tech, Art & puts them all together at (Drum Roll Please) FunkyRobot.ca",
  businessName: "Funky Robot",
  ownerPhoto: "/assets/owner.jpg",
  ownerPhoto1: "/assets/owner2.jpg",
  ownerPhoto2: "/assets/owner1.jpg",
  bgPhoto: "assets/hero-background.jpg",
  bgCTA: "assets/bg.jpg",
  logo: "assets/logo.png",
  logo1: "assets/logo1.png",
  logo2: "assets/logo2.webp",
  logo3: "assets/logo3.jpg",
  logo4: "assets/logo4.png",
  logo5: "assets/logo5.jpg",
  tagline: "Your Event, Our Vibe",
  address: "Burlington, Ontario, Canada",   
  email: "carlos@funkyrobot.ca",
  phone: "(416) 832-3546",
  twitter: "https://twitter.com/funkyrobot73",
  facebook: "https://www.facebook.com/HamiltonPartyIdeas",
  instagram: "https://www.instagram.com/HamiltonPartyIdeas",
  tiktok: "https://www.tiktok.com/@funkyrobot73",
  youtube: "https://www.youtube.com/@funkyrobot73",
  youtubeChannel: "https://www.youtube.com/@funkyrobot73",
  youtubeVideo: "https://www.youtube.com/watch?v=j5sPFH7E02A",
  github: "https://www.github.com/funkyrobot73",
  linkedin: "https://www.linkedin.com/in/carlos-sousa-web/",  
  shortBlurb: "Funky Robot is your go-to DJ and photo booth service for unforgettable events. We bring the beats, the fun, and the memories!",
  photoboothBlurb: "Capture the moment with our state-of-the-art photo booth. With customizable backdrops, props, and instant prints, your guests will love taking home a piece of the fun!",
  djBlurb: "Our DJs are not just music players; they are entertainers who know how to read the crowd and keep the energy high. With a vast library of music spanning all genres, we can create the perfect playlist for your event.",
  videoBlurb: "Check out our latest events and behind-the-scenes action on our YouTube channel. Subscribe for tips, tricks, and inspiration for your next event!",
  testimonials: [ ],
  reviews: [],
  galleryRandom: [
    { src: "assets/sq/gallery1.jpg", alt: "Gallery Image 1" },
    { src: "assets/sq/gallery2.jpg", alt: "Gallery Image 2" },
    { src: "assets/sq/gallery3.jpg", alt: "Gallery Image 3" },
    { src: "assets/sq/gallery4.jpg", alt: "Gallery Image 4" },
    { src: "assets/sq/gallery5.jpg", alt: "Gallery Image 5" },
    { src: "assets/sq/gallery6.jpg", alt: "Gallery Image 6" },
    { src: "assets/sq/gallery7.jpg", alt: "Gallery Image 7" },
    { src: "assets/sq/gallery8.jpg", alt: "Gallery Image 8" },
    { src: "assets/sq/gallery9.jpg", alt: "Gallery Image 9" },
    { src: "assets/sq/gallery10.jpg", alt: "Gallery Image 10" }],
  longBlurb: "At Funky Robot, we believe that every event should be a celebration. Our team of experienced DJs and photo booth operators are dedicated to making your special day unforgettable. Whether it's a wedding, corporate event, or birthday party, we have the perfect package for you. With top-notch equipment, a vast music library, and a commitment to customer satisfaction, we guarantee an experience that will leave you and your guests dancing all night long.",
  aboutUs: "Funky Robot is a premier DJ and photo booth service based in Toronto, Canada. With years of experience in the industry, we know how to make your event unforgettable. Our team is passionate about music and entertainment, and we pride ourselves on our professionalism and attention to detail. We work closely with our clients to understand their vision and bring it to life. From weddings to corporate events, we have the expertise to make your event a success.",
  mission: "Our mission is to provide exceptional DJ and photo booth services that create unforgettable memories for our clients and their guests. We strive to exceed expectations with every event we handle, ensuring a fun and engaging atmosphere.",
  vision: "Our vision is to be the leading DJ and photo booth service in Toronto, known for our creativity, professionalism, and commitment to customer satisfaction. We aim to be the go-to choice for anyone looking to elevate their event with top-notch entertainment.",
  values: [
    "Customer Satisfaction",
    "Creativity",
    "Professionalism",
    "Integrity",
    "Fun"
  ],
  services: [
    "DJ Services",
    "Photo Booth Rentals",
    "Lighting and Sound Equipment",
    "Event Planning",
    "Custom Playlists",
    "Karaoke Services",
  ]
  };
  constructor(private profileService: ProfileService) {
    this.profileService.setProfile(this.profile);
  }
}
