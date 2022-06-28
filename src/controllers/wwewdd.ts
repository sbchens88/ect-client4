import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqedvfgMain, WqedvfgOutput, WqedvfgInput } from 'src/models/wwewdd';

const logger = createLogger('controllers/wwewdd');

export async function wqedvfg(inputs: JSONObject): Promise<WqedvfgOutput> {
    logger.debug('Calling wqedvfg with args: ', inputs);
    const params: WqedvfgInput = {};
    return transport.execute(WqedvfgMain, params) as Promise<WqedvfgOutput>;
}
