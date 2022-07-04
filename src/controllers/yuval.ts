import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqedasfgMain, WqedasfgOutput, WqedasfgInput } from 'src/models/yuval';

const logger = createLogger('controllers/yuval');

export async function wqedasfg(inputs: JSONObject): Promise<WqedasfgOutput> {
    logger.debug('Calling wqedasfg with args: ', inputs);
    const params: WqedasfgInput = {};
    return transport.execute(WqedasfgMain, params) as Promise<WqedasfgOutput>;
}
