import { Router } from 'express';
import * as gdbvsdfgController from 'src/controllers/gdbvsdfg';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountGDBVSDFG(router: Router) {
    router.get(
        '/bvdsfg',
        validate(validators.Wqerufgyv),
        respond((req: any) => gdbvsdfgController.wqerufgyv(Object.assign({}, req.params, req.body, req.query)))
    );
}
