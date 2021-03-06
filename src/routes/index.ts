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
import mountADS from './ads';
import mountASD from './asd';
import mountASDSA from './asdsa';
import mountEWF from './ewf';
import mountYUCL from './yucl';
import mountYUCAL from './yucal';
import mountCHEN from './chen';
import mountADASD from './adasd';
import mountEFOIHDSLN from './efoihdsln';
import mountDSA from './dsa';
import mountFGHJK from './fghjk';
import mountASDFD from './asdfd';
import mount_DELETE from './_delete';

console.log(' Testing in index: index.ts');
console.log('ENV: ', process.env);

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

    const ads = Router();
    mountADS(ads);
    router.use('/ads', ads);

    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);

    const asdsa = Router();
    mountASDSA(asdsa);
    router.use('/asdsa', asdsa);

    const ewf = Router();
    mountEWF(ewf);
    router.use('/ewf', ewf);

    const yucl = Router();
    mountYUCL(yucl);
    router.use('/yucl', yucl);

    const yucal = Router();
    mountYUCAL(yucal);
    router.use('/yucal', yucal);

    const chen = Router();
    mountCHEN(chen);
    router.use('/chen', chen);

    const adasd = Router();
    mountADASD(adasd);
    router.use('/adasd', adasd);

    const efoihdsln = Router();
    mountEFOIHDSLN(efoihdsln);
    router.use('/efoihdsln', efoihdsln);

    const dsa = Router();
    mountDSA(dsa);
    router.use('/dsa', dsa);

    const fghjk = Router();
    mountFGHJK(fghjk);
    router.use('/fghjk', fghjk);

    const asdfd = Router();
    mountASDFD(asdfd);
    router.use('/asdfd', asdfd);

    const _delete = Router();
    mount_DELETE(_delete);
    router.use('/delete', _delete);
}
