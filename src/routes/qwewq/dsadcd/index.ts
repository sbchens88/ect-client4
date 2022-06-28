import { Router } from 'express';
import * as dsadcdController from 'src/controllers/dsadcd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDSADCD(router: Router) {
    router.get(
        '/dsdf',
        validate(validators.Wqrfv),
        respond((req: any) => dsadcdController.wqrfv(Object.assign({}, req.params, req.body, req.query)))
    );
}
