import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import config from '../swagger.config'
import swaggerJsDoc from 'swagger-jsdoc'

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerJsDoc(config)));

export default router;