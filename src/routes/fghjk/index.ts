import { Router } from 'express';
import mountKJHGF from './kjhgf';

export default function mountFGHJK(router: Router) {
    const kjhgf = Router();
    mountKJHGF(kjhgf);
    router.use('/kjhgf', kjhgf);
}
