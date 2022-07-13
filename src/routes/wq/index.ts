import { Router } from 'express';
import mountWEEW from './weew';

export default function mountWQ(router: Router) {
    const weew = Router();
    mountWEEW(weew);
    router.use('/weew', weew);
}
