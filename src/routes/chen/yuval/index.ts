import { Router } from 'express';
import * as yuvalController from 'src/controllers/yuval';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountYUVAL(router: Router) {
    router.get(
        '/bell',
        validate(validators.Wqedasfg),
        respond((req: any) => yuvalController.wqedasfg(Object.assign({}, req.params, req.body, req.query)))
    );
}
