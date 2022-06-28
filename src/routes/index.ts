import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountTESTING from './testing';
import mountTREST from './trest';
import mountSADSAD from './sadsad';

export default function addRoutes(router: Router) {
    const api = express.Router();
    const auth = express.Router();

    mountAPI(api);
    mountAuth(auth);

    router.get(
        '/',
        respond(() => ({ message: 'Up and running!' }))
    );

    router.use('/api', api);
    router.use('/auth', auth);

    const testing = Router();
    mountTESTING(testing);
    router.use('/testing', testing);

    const trest = Router();
    mountTREST(trest);
    router.use('/trest', trest);

    const sadsad = Router();
    mountSADSAD(sadsad);
    router.use('/sadsad', sadsad);
}
