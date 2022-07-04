import { Router } from 'express';
import * as asdasdasdController from 'src/controllers/asdasdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDASD(router: Router) {
    router.get(
        '/asdwwwwwww',
        validate(validators.Edsafgvbfd),
        respond((req: any) => asdasdasdController.edsafgvbfd(Object.assign({}, req.params, req.body, req.query)))
    );
}
