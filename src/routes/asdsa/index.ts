import { Router } from 'express';
import mountDDASW from './ddasw';

export default function mountASDSA(router: Router) {
    const ddasw = Router();
    mountDDASW(ddasw);
    router.use('/ddasw', ddasw);
}
