import { Router } from 'express';
import * as aqdwqweController from 'src/controllers/aqdwqwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAQDWQWE(router: Router) {
    router.get(
        '/qewqw',
        validate(validators.Qwqe),
        respond((req: any) => aqdwqweController.qwqe(Object.assign({}, req.params, req.body, req.query)))
    );
}
