import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { options } from '../swagger'
import swaggerJsDoc from 'swagger-jsdoc'

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerJsDoc(options)));

export default router;