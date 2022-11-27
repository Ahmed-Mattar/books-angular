import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        title: 'Clean Code',
        author: 'Robert C Martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 35.61,
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY218_.jpg',
        price: 37,
      },
      {
        title: 'Fundamentals of Software Architecture',
        author: 'Mark Richards',
        image: 'https://m.media-amazon.com/images/I/51d0yhmnXQL.jpg',
        price: 32,
      },
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        image: 'https://m.media-amazon.com/images/I/512ESwpmobL.jpg',
        price: 23,
      },
    ];
  }
}
