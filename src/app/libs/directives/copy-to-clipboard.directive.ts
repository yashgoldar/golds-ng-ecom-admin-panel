import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appCopyToClipboard]' })
export class CopyToClipboardDirective {
  @Input('appCopyToClipboard') text!: string;

  @HostListener('click') onClick() {
    navigator.clipboard.writeText(this.text);
    // alert('Copied to clipboard!');
  }
}
