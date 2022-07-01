import { Router } from 'express';
import mountASDWWW from './asdwww';

export default function mountADS(router: Router) {
    const asdwww = Router();
    mountASDWWW(asdwww);
    router.use('/asdwww', asdwww);
}
