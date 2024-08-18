import { NextFunction, Request, Response } from 'express';

export class TypeMiddleware {

  static validTypes(validTypes: string[]) {

    return (req: Request, res: Response, next: NextFunction) => {

      // Detalle en los params con los middleware en los params usar la url
      const type = req.url.split('/').at(2) ?? ''; // /multiple/products => products
  
      if (!validTypes.includes(type)) {
        return res.status(400).json({ error: `Invalid type: ${ type }, valid ones ${ validTypes }` });
      }

      next();
    };

  }

}