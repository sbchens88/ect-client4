import { Router } from 'express';
import * as asdwedfController from 'src/controllers/asdwedf';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDWEDF(router: Router) {
    router.get(
        '/dsad',
        validate(validators.Qwewerdf),
        respond((req: any) => asdwedfController.qwewerdf(Object.assign({}, req.params, req.body, req.query)))
    );
}
