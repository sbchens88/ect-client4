import { Router } from 'express';
import mountASDWEDF from './asdwedf';

export default function mountASDASD(router: Router) {
    const asdwedf = Router();
    mountASDWEDF(asdwedf);
    router.use('/asdwedf', asdwedf);
}
