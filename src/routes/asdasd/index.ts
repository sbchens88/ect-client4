import { Router } from 'express';
import mountASDWEDF from './asdwedf';
import mountASDSADW from './asdsadw';

export default function mountASDASD(router: Router) {
    const asdwedf = Router();
    mountASDWEDF(asdwedf);
    router.use('/asdwedf', asdwedf);

    const asdsadw = Router();
    mountASDSADW(asdsadw);
    router.use('/asdsadw', asdsadw);
}
