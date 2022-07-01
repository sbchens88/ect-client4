import { Router } from 'express';
import * as asdwwwController from 'src/controllers/asdwww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDWWW(router: Router) {
    router.get(
        '/www',
        validate(validators.Qwedcvxcs),
        respond((req: any) => asdwwwController.qwedcvxcs(Object.assign({}, req.params, req.body, req.query)))
    );
}
