import { Router } from 'express';
import mountW from './w';

export default function mountASDW(router: Router) {
    const w = Router();
    mountW(w);
    router.use('/w', w);
}
