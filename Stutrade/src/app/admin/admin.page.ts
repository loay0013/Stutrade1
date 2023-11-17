import { Component, OnInit } from '@angular/core';
import { bookService } from '../services/book.service';
import { book } from '../models/book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  book: book = {};
  books: book[] = [];
  isEditing = false;
  constructor(private bookService: bookService) { }

  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    this.bookService.getAll().subscribe((data) => {
      this.books = data;
    });
  }
  addOrUpdatebook() {
    if (this.isEditing) {
      this.update(this.book.bookID);
    } else {
      this.create();
    }
  }

  create() {
    this.bookService.create(this.book).subscribe(() => {
      this.loadBooks();
      this.book = {}; // Tøm formen efter tilføjelse
    });
  }

  update(id: any) {
    this.bookService.update(id, this.book).subscribe(() => {
      this.loadBooks();
      this.book = {}; // Tøm formen efter opdatering
      this.isEditing = false; // Nulstil isEditing efter opdatering
    });
  }

  editbook(id: any) {
    const selectedBook = this.books.find((bookItem) => bookItem.bookID === id);
    if (selectedBook) {
      this.book = { ...selectedBook };
      this.isEditing = true;
    }
  }

  deletebook(id: any) {
    this.bookService.delete(id).subscribe(() => {
      this.loadBooks();
    });
  }

  cancelEdit() {
    this.book = {};
    this.isEditing = false;
  }

}
