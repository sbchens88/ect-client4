import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { DsfdsfMain, DsfdsfOutput, DsfdsfInput } from 'src/models/kjhgf';

const logger = createLogger('controllers/kjhgf');

export async function dsfdsf(inputs: JSONObject): Promise<DsfdsfOutput> {
    logger.debug('Calling dsfdsf with args: ', inputs);
    const params: DsfdsfInput = {};
    return transport.execute(DsfdsfMain, params) as Promise<DsfdsfOutput>;
}
