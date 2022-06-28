import { Router } from 'express';
import * as asdsdController from 'src/controllers/asdsd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDSD(router: Router) {
    router.get(
        '/sasdww',
        validate(validators.Qweccc),
        respond((req: any) => asdsdController.qweccc(Object.assign({}, req.params, req.body, req.query)))
    );
}
