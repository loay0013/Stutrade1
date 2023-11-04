import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitelPage } from './titel.page';

describe('TitelPage', () => {
  let component: TitelPage;
  let fixture: ComponentFixture<TitelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
