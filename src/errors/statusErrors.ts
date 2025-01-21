import {
  AuthError,
  NotFoundError,
  ForbidenError,
  ValidationError,
} from './AppErrors';

const errorsByCode = {
  400: ValidationError,
  401: AuthError,
  403: ForbidenError,
  404: NotFoundError,
} as const;

export const throwErrorByStatus = <T extends keyof typeof errorsByCode>(
  status: keyof typeof errorsByCode | number,
  message: string,
  cause?: unknown
): T | Error => {
  const ErrorClass = errorsByCode[status as keyof typeof errorsByCode] || Error;
  return new ErrorClass(message, cause);
};
