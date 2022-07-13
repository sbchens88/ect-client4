import { Router } from 'express';
import * as weewController from 'src/controllers/weew';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWEEW(router: Router) {
    router.post(
        '/eww',
        validate(validators.Qweqw),
        respond((req: any) => weewController.qweqw(Object.assign({}, req.params, req.body, req.query)))
    );
}
