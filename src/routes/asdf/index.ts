import { Router } from 'express';
import mountAQDWQWE from './aqdwqwe';

export default function mountASDF(router: Router) {
    const aqdwqwe = Router();
    mountAQDWQWE(aqdwqwe);
    router.use('/aqdwqwe', aqdwqwe);
}
