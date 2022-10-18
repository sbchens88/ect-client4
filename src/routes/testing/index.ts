import { Router } from 'express';
import mountAPITE from './apite';
import mountAPI from './api';

export default function mountTESTING(router: Router) {
    const apite = Router();
    mountAPITE(apite);
    router.use('/apite', apite);

    const api = Router();
    mountAPI(api);
    router.use('/api', api);
}
