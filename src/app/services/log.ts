import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

enum LogLevel {
  none = 0,
  error = 1,
  warn = 2,
  info = 3,
  debug = 4,
}

@Injectable({ providedIn: 'root' })
export class Log {
  level: LogLevel = LogLevel[environment.logLevel];
  debug(...rest) {
    if (this.level < LogLevel.debug) {
      return;
    }
    console.debug(`DEBUG [StudentAccess]`, ...rest);
  }
  info(...rest) {
    if (this.level < LogLevel.info) {
      return;
    }
    console.info(`%cINFO [StudentAccess]`, 'color: blue', ...rest);
  }
  warn(...rest) {
    if (this.level < LogLevel.warn) {
      return;
    }
    console.warn(`WARN [StudentAccess]`, ...rest);
  }
  error(...rest) {
    if (this.level < LogLevel.error) {
      return;
    }
    console.error(`ERROR [StudentAccess]`, ...rest);
  }
}
