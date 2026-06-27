import { NextFunction, Request, Response } from 'express';

export default function asyncWrapper(callback: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(typeof callback);
    callback(req, res, next).catch(next);
  };
}