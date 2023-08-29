import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownToPdfComponent } from './markdown-to-pdf.component';

describe('MarkdownToPdfComponent', () => {
  let component: MarkdownToPdfComponent;
  let fixture: ComponentFixture<MarkdownToPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownToPdfComponent]
    });
    fixture = TestBed.createComponent(MarkdownToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
