import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqrfvMain, WqrfvOutput, WqrfvInput } from 'src/models/dsadcd';

const logger = createLogger('controllers/dsadcd');

export async function wqrfv(inputs: JSONObject): Promise<WqrfvOutput> {
    logger.debug('Calling wqrfv with args: ', inputs);
    const params: WqrfvInput = {};
    return transport.execute(WqrfvMain, params) as Promise<WqrfvOutput>;
}
