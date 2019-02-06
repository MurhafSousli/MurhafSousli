import { Info } from './admin.model';

export class GetInfo {
  static readonly type = '[Info] Get Info';
}

export class GetInfoSuccess {
  static readonly type = '[Info] Get Info Success';

  constructor(public info: Info) {
  }
}

export class GetInfoFailed {
  static readonly type = '[Info] Get Info Failed';

  constructor(public error: Error) {
  }
}

export class UpdateInfo {
  static readonly type = '[Info] Update Info';
}

export class UpdateInfoSuccess {
  static readonly type = '[Info] Update Info Success';

  constructor(public info: Info) {
  }
}

export class UpdateInfoFailed {
  static readonly type = '[Info] Update Info Failed';

  constructor(public error: Error) {
  }
}


