import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    console.error('An error occurred:', error);
    alert('Something went wrong!');
  }
}
