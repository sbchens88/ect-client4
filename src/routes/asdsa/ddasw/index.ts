import { Router } from 'express';
import * as ddaswController from 'src/controllers/ddasw';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDDASW(router: Router) {
    router.get(
        '/wweqwed',
        validate(validators.Qweqwe),
        respond((req: any) => ddaswController.qweqwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
