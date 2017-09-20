import { Injectable } from '@angular/core';

enum levels {
  none = 0,
  error = 1,
  warn = 2,
  info = 3,
  debug = 4
};

@Injectable()
export class Log {
  // todo: should be replaced with ionic env variable
  public level: number = levels.error;
  // public level: number = levels.debug;
  debug(...rest){
    if( this.level < levels.debug){ return; }
    console.debug(`DEBUG [StudentAccess]`, ...rest);
  }
  info(...rest){
    if( this.level < levels.info){ return; }
    console.info(`%cINFO [StudentAccess]`, 'color: blue', ...rest);
  }
  warn(...rest){
    if( this.level < levels.warn){ return; }
    console.warn(`WARN [StudentAccess]`, ...rest);
  }
  error(...rest){
    if( this.level < levels.error){ return; }
    console.error(`ERROR [StudentAccess]`, ...rest);
  }
}
