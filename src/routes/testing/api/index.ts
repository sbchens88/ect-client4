import { Router } from 'express';
import * as apiController from 'src/controllers/api';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPI(router: Router) {
    router.get(
        '/hklein',
        validate(validators.Testing),
        respond((req: any) => apiController.testing(Object.assign({}, req.params, req.body, req.query)))
    );
}
