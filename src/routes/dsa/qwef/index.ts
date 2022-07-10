import { Router } from 'express';
import * as qwefController from 'src/controllers/qwef';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWEF(router: Router) {
    router.get(
        '/sdfdfg',
        validate(validators.Asdfvgwe),
        respond((req: any) => qwefController.asdfvgwe(Object.assign({}, req.params, req.body, req.query)))
    );
}
