import { Router } from 'express';
import * as asdasaweController from 'src/controllers/asdasawe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASAWE(router: Router) {
    router.get(
        '/qwe',
        validate(validators.Ewqadsc),
        respond((req: any) => asdasaweController.ewqadsc(Object.assign({}, req.params, req.body, req.query)))
    );
}
