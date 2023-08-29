import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as markdownit from 'markdown-it';
import htmlToPdfmake from 'html-to-pdfmake'

@Component({
  selector: 'app-markdown-to-pdf',
  templateUrl: './markdown-to-pdf.component.html',
  styleUrls: ['./markdown-to-pdf.component.scss']
})
export class MarkdownToPdfComponent {
  markdownString: string = `**Heading** \n **my name:** \n Sibaram`;
  htmlContent: string = '';
  preprocessMarkdownText: string = '';

  constructor() {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  convertAndDownload() {
    const md = new markdownit({
      html: true
    });
    // Preprocessing the html text and adding \n to <br>
    this.preprocessMarkdownText = this.preprocessMarkdown(this.markdownString)
    // Converting the text to html tag
    this.htmlContent = md.render(this.preprocessMarkdownText);

    let filename = "custom-pdf.pdf"
    // Downloading the html file
    let val = htmlToPdfmake(this.htmlContent);
    let dd = {content:val};
    pdfMake.createPdf(dd).download(filename);
  }

  preprocessMarkdown(markdown: string): string {
    // Replace single newlines with <br> tags
    return markdown.replace(/\n/g, '<br>');
  }
}
