import { Router } from 'express';
import * as asdjoklController from 'src/controllers/asdjokl';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDJOKL(router: Router) {
    router.get(
        '/asdj',
        validate(validators.Qwedwqd),
        respond((req: any) => asdjoklController.qwedwqd(Object.assign({}, req.params, req.body, req.query)))
    );
}
