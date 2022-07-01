import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwqeMain, QwqeOutput, QwqeInput } from 'src/models/aqdwqwe';

const logger = createLogger('controllers/aqdwqwe');

export async function qwqe(inputs: JSONObject): Promise<QwqeOutput> {
    logger.debug('Calling qwqe with args: ', inputs);
    const params: QwqeInput = {};
    return transport.execute(QwqeMain, params) as Promise<QwqeOutput>;
}
