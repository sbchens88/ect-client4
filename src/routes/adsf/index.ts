import { Router } from 'express';
import mountEW from './ew';

export default function mountADSF(router: Router) {
    const ew = Router();
    mountEW(ew);
    router.use('/ew', ew);
}
