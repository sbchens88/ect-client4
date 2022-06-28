import { Router } from 'express';
import * as asddsController from 'src/controllers/asdds';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDDS(router: Router) {
    router.get(
        '/dasww',
        validate(validators.Qwerfdsf),
        respond((req: any) => asddsController.qwerfdsf(Object.assign({}, req.params, req.body, req.query)))
    );
}
