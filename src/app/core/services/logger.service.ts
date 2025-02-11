import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  logError(error: any) {
    console.error('Logging error:', error);
  }
}
