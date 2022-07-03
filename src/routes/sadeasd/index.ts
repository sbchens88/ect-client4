import { Router } from 'express';
import mountASDWASD from './asdwasd';

export default function mountSADEASD(router: Router) {
    const asdwasd = Router();
    mountASDWASD(asdwasd);
    router.use('/asdwasd', asdwasd);
}
