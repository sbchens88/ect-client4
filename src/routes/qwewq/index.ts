import { Router } from 'express';
import mountDSADCD from './dsadcd';

export default function mountQWEWQ(router: Router) {
    const dsadcd = Router();
    mountDSADCD(dsadcd);
    router.use('/dsadcd', dsadcd);
}
