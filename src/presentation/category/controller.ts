import { Request, Response } from 'express';

import { CustomError } from '../../domain';
import { AuthService } from '../services/auth.service';

export class CategoryController {

  // DI
  constructor() {}

  private handleError = (error: unknown, res: Response) => {

    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${ error }`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  createCategory = async(req: Request, res: Response) => {

    res.json('Create category');

  }

  getCategory = async(req: Request, res: Response) => {

    res.json('Get category');

  }

}