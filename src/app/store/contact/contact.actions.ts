export class SendEmail {
  static readonly type = '[Contact] Send Email';
}

export class SendEmailSuccess {
  static readonly type = '[Contact] Send Email Success';
}

export class SendEmailFailed {
  static readonly type = '[Contact] Send Email Failed';

  constructor(public error: Error) {
  }
}
