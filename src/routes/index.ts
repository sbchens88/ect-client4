import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountTESTING from './testing';
import mountTREST from './trest';
import mountSADSAD from './sadsad';
import mountQWEWQ from './qwewq';
import mountTESTINF from './testinf';
import mountASDAWSD from './asdawsd';
import mountASDASD from './asdasd';
import mountASDW from './asdw';
import mountASDWW from './asdww';
import mountASDF from './asdf';

112312;

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

    const qwewq = Router();
    mountQWEWQ(qwewq);
    router.use('/qwewq', qwewq);

    const testinf = Router();
    mountTESTINF(testinf);
    router.use('/testinf', testinf);

    const asdawsd = Router();
    mountASDAWSD(asdawsd);
    router.use('/asdawsd', asdawsd);

    const asdasd = Router();
    mountASDASD(asdasd);
    router.use('/asdasd', asdasd);

    const asdw = Router();
    mountASDW(asdw);
    router.use('/asdw', asdw);

    const asdww = Router();
    mountASDWW(asdww);
    router.use('/asdww', asdww);

    const asdf = Router();
    mountASDF(asdf);
    router.use('/asdf', asdf);
}
