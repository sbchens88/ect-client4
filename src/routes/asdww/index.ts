import { Router } from 'express';
import mountWQWE from './wqwe';

export default function mountASDWW(router: Router) {
    const wqwe = Router();
    mountWQWE(wqwe);
    router.use('/wqwe', wqwe);
}
