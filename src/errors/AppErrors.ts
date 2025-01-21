export class AuthError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = 401;
  }
}

export class ForbidenError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'ForbidenError';
    this.statusCode = 403;
  }
}

export class NotFoundError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

export class ValidationError extends Error {
  moreInfo: unknown;
  statusCode: number;
  constructor(message: string, moreInfo?: unknown) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.moreInfo = moreInfo;
  }
}
