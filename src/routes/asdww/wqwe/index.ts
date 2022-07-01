import { Router } from 'express';
import * as wqweController from 'src/controllers/wqwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWQWE(router: Router) {
    router.get(
        '/eewq',
        validate(validators.Qwedfdd),
        respond((req: any) => wqweController.qwedfdd(Object.assign({}, req.params, req.body, req.query)))
    );
}
