import { Router } from 'express';
import * as rergController from 'src/controllers/rerg';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountRERG(router: Router) {
    router.get(
        '/errrq',
        validate(validators.Werwerwefds),
        respond((req: any) => rergController.werwerwefds(Object.assign({}, req.params, req.body, req.query)))
    );
}
