import { Router } from 'express';
import mountRERG from './rerg';

export default function mountEWF(router: Router) {
    const rerg = Router();
    mountRERG(rerg);
    router.use('/rerg', rerg);
}
