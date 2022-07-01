import { Router } from 'express';
import mountASDQWE from './asdqwe';

export default function mountASD(router: Router) {
    const asdqwe = Router();
    mountASDQWE(asdqwe);
    router.use('/asdqwe', asdqwe);
}
