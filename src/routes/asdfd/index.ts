import { Router } from 'express';
import mountGDBVSDFG from './gdbvsdfg';

export default function mountASDFD(router: Router) {
    const gdbvsdfg = Router();
    mountGDBVSDFG(gdbvsdfg);
    router.use('/gdbvsdfg', gdbvsdfg);
}
