import { Router } from 'express';
import mountWWEWDD from './wwewdd';

export default function mountSADSAD(router: Router) {
    const wwewdd = Router();
    mountWWEWDD(wwewdd);
    router.use('/wwewdd', wwewdd);
}
