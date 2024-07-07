import { Component, OnInit } from '@angular/core';
import { linkedList } from './linked-list';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
  images:string[]=['assets/image/img2.jpg','assets/image/img3.jpg','assets/image/img4.jpg','assets/image/img1.jpg',]
  // images:string[]=[]
  carouselList!:linkedList<string>;
  currentItem:string | null = null;


  nextDom = document.getElementById('next');
  prevDom = document.getElementById('prev');

  carouselDom:any ;
  SliderDom :any;
  thumbnailBorderDom :any;
  thumbnailItemsDom :any;
  timeDom :any;

  constructor(){
    this.carouselList = new linkedList<string>();
    for (const img of this.images) {
      this.carouselList.append(img)
    }
    this.images = []
    this.images.push(this.carouselList.current!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.next!.next!.value)
  }
  
  ngOnInit(): void {
    this.updateCurrentItem();
  }

  updateCurrentItem(){
    this.currentItem = this.carouselList.getCurrent();
  }

  nextItem(){
    
    this.images = []
    this.images.push(this.carouselList.current!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.next!.value)
    this.images.push(this.carouselList.current!.next!.next!.next!.next!.value)
    this.carouselList.next();
    this.updateCurrentItem();
  this.carouselDom = document.querySelector('.carousel');
  this.SliderDom = this.carouselDom!.querySelector('.carousel .list');
  this.thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  this.thumbnailItemsDom = this.thumbnailBorderDom!.querySelectorAll('.item');
  this.timeDom = document.querySelector('.carousel .time');
  let  SliderItemsDom = this.SliderDom!.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
        this.SliderDom!.appendChild(SliderItemsDom[0]);
        this.thumbnailBorderDom!.appendChild(thumbnailItemsDom[0]);
        this.carouselDom!.classList.add('next');
    
   setTimeout(() => {
        this.carouselDom!.classList.remove('next');
        this.carouselDom!.classList.remove('prev');
    }, 3000);
  }

  prevItem(){
    this.carouselList.prev();
    this.updateCurrentItem();
    this.images.unshift(this.images[this.images.length-1]);
    this.images.pop();
    this.carouselDom = document.querySelector('.carousel');
    this.SliderDom = this.carouselDom!.querySelector('.carousel .list');
    // this.thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    // this.thumbnailItemsDom = this.thumbnailBorderDom!.querySelectorAll('.item');
    // this.timeDom = document.querySelector('.carousel .time');
    let  SliderItemsDom = this.SliderDom!.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    console.log("SliderItemsDom");
    
    this.SliderDom!.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    // this.thumbnailBorderDom!.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    this.carouselDom!.classList.add('prev');
    
   setTimeout(() => {
        this.carouselDom!.classList.remove('next');
        this.carouselDom!.classList.remove('prev');
    }, 3000);

  }
}
