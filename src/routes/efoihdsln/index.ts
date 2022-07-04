import { Router } from 'express';
import mountASDJOKL from './asdjokl';

export default function mountEFOIHDSLN(router: Router) {
    const asdjokl = Router();
    mountASDJOKL(asdjokl);
    router.use('/asdjokl', asdjokl);
}
