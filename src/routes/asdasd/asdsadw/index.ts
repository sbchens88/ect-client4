import { Router } from 'express';
import * as asdsadwController from 'src/controllers/asdsadw';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDSADW(router: Router) {
    router.get(
        '/wqwedc',
        validate(validators.Qwds),
        respond((req: any) => asdsadwController.qwds(Object.assign({}, req.params, req.body, req.query)))
    );
}
