import { Router } from 'express';
import * as asdffController from 'src/controllers/asdff';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDFF(router: Router) {
    router.get(
        '/asdsd',
        validate(validators.Qedfv),
        respond((req: any) => asdffController.qedfv(Object.assign({}, req.params, req.body, req.query)))
    );
}
