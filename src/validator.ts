import type { NextFunction, Request, Response } from 'express';

/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // TODO implement me
  if (!req.params && !req.body) {
    throw new Error('missing params');
  }
  next();
}
