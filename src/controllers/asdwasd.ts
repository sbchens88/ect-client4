import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DsfdifjigeMain, DsfdifjigeOutput, DsfdifjigeInput } from 'src/models/asdwasd';

const logger = createLogger('controllers/asdwasd');

export async function dsfdifjige(inputs: JSONObject): Promise<DsfdifjigeOutput> {
    logger.debug('Calling dsfdifjige with args: ', inputs);
    const params: DsfdifjigeInput = {};
    return transport.execute(DsfdifjigeMain, params) as Promise<DsfdifjigeOutput>;
}
