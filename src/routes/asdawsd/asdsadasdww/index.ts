import { Router } from 'express';
import * as asdsadasdwwController from 'src/controllers/asdsadasdww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDSADASDWW(router: Router) {
    router.get(
        '/wwww',
        validate(validators.Qwewe),
        respond((req: any) => asdsadasdwwController.qwewe(Object.assign({}, req.params, req.body, req.query)))
    );
}
