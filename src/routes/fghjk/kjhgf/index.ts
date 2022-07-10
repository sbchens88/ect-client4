import { Router } from 'express';
import * as kjhgfController from 'src/controllers/kjhgf';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountKJHGF(router: Router) {
    router.get(
        '/poijh',
        validate(validators.Dsfdsf),
        respond((req: any) => kjhgfController.dsfdsf(Object.assign({}, req.params, req.body, req.query)))
    );
}
