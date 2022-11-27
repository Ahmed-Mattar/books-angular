import { Injectable } from '@angular/core';
import { Book } from '../types/book.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}

  add(book: Book) {
    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book): void {
    this.cart = this.cart.filter((el) => el.title !== book.title);
  }

  find(book: Book): boolean {
    const found = this.cart.findIndex((el) => el.title == book.title);
    if (found > -1) return true;
    else return false;
  }
}
