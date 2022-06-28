import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqedcsMain, WqedcsOutput, WqedcsInput } from 'src/models/asdasd';

const logger = createLogger('controllers/asdasd');

export async function wqedcs(inputs: JSONObject): Promise<WqedcsOutput> {
    logger.debug('Calling wqedcs with args: ', inputs);
    const params: WqedcsInput = {};
    return transport.execute(WqedcsMain, params) as Promise<WqedcsOutput>;
}
