import { Router } from 'express';
import * as tuvalController from 'src/controllers/tuval';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTUVAL(router: Router) {
    router.patch(
        '/yucalwwww',
        validate(validators.Qweqf3Igi),
        respond((req: any) => tuvalController.qweqf3Igi(Object.assign({}, req.params, req.body, req.query)))
    );
}
