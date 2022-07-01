import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedfddMain, QwedfddOutput, QwedfddInput } from 'src/models/wqwe';

const logger = createLogger('controllers/wqwe');

export async function qwedfdd(inputs: JSONObject): Promise<QwedfddOutput> {
    logger.debug('Calling qwedfdd with args: ', inputs);
    const params: QwedfddInput = {};
    return transport.execute(QwedfddMain, params) as Promise<QwedfddOutput>;
}
