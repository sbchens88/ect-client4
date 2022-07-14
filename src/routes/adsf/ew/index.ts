import { Router } from 'express';
import * as ewController from 'src/controllers/ew';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountEW(router: Router) {
    router.get(
        '/dsffff',
        validate(validators.Pqpqp),
        respond((req: any) => ewController.pqpqp(Object.assign({}, req.params, req.body, req.query)))
    );
}
