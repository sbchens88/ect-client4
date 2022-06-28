import { Router } from 'express';
import * as asdasdController from 'src/controllers/asdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASD(router: Router) {
    router.get(
        '/assd',
        validate(validators.Wqedcs),
        respond((req: any) => asdasdController.wqedcs(Object.assign({}, req.params, req.body, req.query)))
    );
}
