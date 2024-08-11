import { Router } from 'express';
import { CategoryController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class CategoryRoutes {

  static get routes(): Router {

    const router = Router();
    const controller = new CategoryController();
    
    router.post('/', [ AuthMiddleware.validateJWT ], controller.createCategory);
    router.get('/', controller.getCategory);

    return router;
  }


}

