import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadedBookPage } from './uploaded-book.page';

describe('UploadedBookPage', () => {
  let component: UploadedBookPage;
  let fixture: ComponentFixture<UploadedBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UploadedBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
