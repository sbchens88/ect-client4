import { Router } from 'express';
import mountASDDS from './asdds';

export default function mountTESSTIN(router: Router) {
    const asdds = Router();
    mountASDDS(asdds);
    router.use('/asdds', asdds);
}
