import { Router } from 'express';
import mountASDASAWE from './asdasawe';

export default function mountASDA(router: Router) {
    const asdasawe = Router();
    mountASDASAWE(asdasawe);
    router.use('/asdasawe', asdasawe);
}
