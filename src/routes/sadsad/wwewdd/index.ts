import { Router } from 'express';
import * as wwewddController from 'src/controllers/wwewdd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountWWEWDD(router: Router) {
    router.get(
        '/dssss',
        validate(validators.Wqedvfg),
        respond((req: any) => wwewddController.wqedvfg(Object.assign({}, req.params, req.body, req.query)))
    );
}
