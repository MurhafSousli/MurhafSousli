export class GetInfo {
    static readonly type = '[Info] Get Info';
}

export class GetInfoSuccess {
    static readonly type = '[Info] Get Info Success';
}

export class GetInfoFailed {
    static readonly type = '[Info] Get Info Failed';
}

export class UpdateInfo {
    static readonly type = '[Info] Update Info';
    constructor(payload: any) {
    }
}

export class UpdateInfoSuccess {
    static readonly type = '[Info] Update Info Success';
}

export class UpdateInfoFailed {
    static readonly type = '[Info] Update Info Failed';
}


