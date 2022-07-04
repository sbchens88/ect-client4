import { Router } from 'express';
import mountYUVAL from './yuval';

export default function mountCHEN(router: Router) {
    const yuval = Router();
    mountYUVAL(yuval);
    router.use('/yuval', yuval);
}
