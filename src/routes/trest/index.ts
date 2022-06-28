import { Router } from 'express';
import mountASDSD from './asdsd';

export default function mountTREST(router: Router) {
    const asdsd = Router();
    mountASDSD(asdsd);
    router.use('/asdsd', asdsd);
}
