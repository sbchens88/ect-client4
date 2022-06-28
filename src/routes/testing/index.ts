import { Router } from 'express';
import mountAPITE from './apite';

export default function mountTESTING(router: Router) {
    const apite = Router();
    mountAPITE(apite);
    router.use('/apite', apite);
}
