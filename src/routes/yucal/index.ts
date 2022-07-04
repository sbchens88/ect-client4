import { Router } from 'express';
import mountTUVAL from './tuval';

export default function mountYUCAL(router: Router) {
    const tuval = Router();
    mountTUVAL(tuval);
    router.use('/tuval', tuval);
}
