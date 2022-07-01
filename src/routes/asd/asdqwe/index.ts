import { Router } from 'express';
import * as asdqweController from 'src/controllers/asdqwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDQWE(router: Router) {
    router.get(
        '/qweasd',
        validate(validators.Qweqwd),
        respond((req: any) => asdqweController.qweqwd(Object.assign({}, req.params, req.body, req.query)))
    );
}
