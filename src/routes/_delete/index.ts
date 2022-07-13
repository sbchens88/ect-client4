import { Router } from 'express';
import * as deleteController from 'src/controllers/_delete';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mount_DELETE(router: Router) {
    router.delete(
        '/casdddsa',
        validate(validators.Asdsa),
        respond((req: any) => deleteController.asdsa(Object.assign({}, req.params, req.body, req.query)))
    );
}
