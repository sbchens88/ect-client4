import { Router } from 'express';
import * as wwwwwwwwwweController from 'src/controllers/wwwwwwwwwwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWWWWWWWWWWE(router: Router) {
    router.get(
        '/eew',
        validate(validators.Qsedvvv),
        respond((req: any) => wwwwwwwwwweController.qsedvvv(Object.assign({}, req.params, req.body, req.query)))
    );
}
