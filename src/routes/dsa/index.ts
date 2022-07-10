import { Router } from 'express';
import mountQWEF from './qwef';

export default function mountDSA(router: Router) {
    const qwef = Router();
    mountQWEF(qwef);
    router.use('/qwef', qwef);
}
