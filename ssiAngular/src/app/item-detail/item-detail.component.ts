import {Component, OnInit} from '@angular/core';

const ITEM = {
  name: 'Helmet',
  image: '/assets/images/helmet.jpg',
  category: 'safety',
  label: 'ultra safe',
  price: '4.99',
  description: 'Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros',
  comments: [
    {
      rating: 5,
      comment: 'Imagine all safety PPE in SSI!',
      author: 'Mr T',
      date: '2012-10-16T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Gives me a lot of confort, I wish I could get my mother-in-law to have it!',
      author: 'Tania Barrancos',
      date: '2014-09-05T17:57:28.556094Z'
    },
    {
      rating: 3,
      comment: 'Use it, just use it!',
      author: 'Michael Rodriguez',
      date: '2015-02-13T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Ultimate, Reaching for the stars!',
      author: 'Diana Cardozo',
      date: '2013-12-02T17:57:28.556094Z'
    },
    {
      rating: 2,
      comment: 'It is simply very nice!',
      author: '50 Cent',
      date: '2011-12-02T17:57:28.556094Z'
    }
  ]
};

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item = ITEM;
  itemDetail = ITEM.comments;

  constructor() {
  }

  ngOnInit() {
  }

}
