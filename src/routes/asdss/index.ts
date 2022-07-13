import { Router } from 'express';
import * as asdssController from 'src/controllers/asdss';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDSS(router: Router) {
    router.get(
        '/ssddd',
        validate(validators.Sda),
        respond((req: any) => asdssController.sda(Object.assign({}, req.params, req.body, req.query)))
    );
}
