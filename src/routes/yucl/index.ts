import { Router } from 'express';
import mountASDFF from './asdff';

export default function mountYUCL(router: Router) {
    const asdff = Router();
    mountASDFF(asdff);
    router.use('/asdff', asdff);
}
