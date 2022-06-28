import { Router } from 'express';
import * as apiteController from 'src/controllers/apite';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPITE(router: Router) {
    router.get(
        '/seting',
        validate(validators.Asdhyt),
        respond((req: any) => apiteController.asdhyt(Object.assign({}, req.params, req.body, req.query)))
    );
}
