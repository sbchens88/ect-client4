import { Router } from 'express';
import * as asassssController from 'src/controllers/asassss';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASASSSS(router: Router) {
    router.get(
        '/sddpppp',
        validate(validators.Qwedfdf),
        respond((req: any) => asassssController.qwedfdf(Object.assign({}, req.params, req.body, req.query)))
    );
}
