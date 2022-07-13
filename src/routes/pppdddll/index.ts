import { Router } from 'express';
import * as pppdddllController from 'src/controllers/pppdddll';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountPPPDDDLL(router: Router) {
    router.get(
        '/dslpls',
        validate(validators.Qwedhic),
        respond((req: any) => pppdddllController.qwedhic(Object.assign({}, req.params, req.body, req.query)))
    );
}
