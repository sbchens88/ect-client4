import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedcvxcsMain, QwedcvxcsOutput, QwedcvxcsInput } from 'src/models/asdwww';

const logger = createLogger('controllers/asdwww');

export async function qwedcvxcs(inputs: JSONObject): Promise<QwedcvxcsOutput> {
    logger.debug('Calling qwedcvxcs with args: ', inputs);
    const params: QwedcvxcsInput = {};
    return transport.execute(QwedcvxcsMain, params) as Promise<QwedcvxcsOutput>;
}
