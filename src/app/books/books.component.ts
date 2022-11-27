import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book.interface';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
