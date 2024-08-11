import { Router } from 'express';
import { CategoryController } from './controller';

export class CategoryRoutes {

  static get routes(): Router {

    const router = Router();
    const controller = new CategoryController();
    
    router.post('/', controller.createCategory);
    router.get('/', controller.getCategory);

    return router;
  }


}

