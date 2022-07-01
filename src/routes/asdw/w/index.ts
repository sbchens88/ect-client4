import { Router } from 'express';
import * as wController from 'src/controllers/w';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountW(router: Router) {
    router.get(
        '/wq',
        validate(validators.Asd),
        respond((req: any) => wController.asd(Object.assign({}, req.params, req.body, req.query)))
    );
}
