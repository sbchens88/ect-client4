import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqweMain, QweqweOutput, QweqweInput } from 'src/models/ddasw';

const logger = createLogger('controllers/ddasw');

export async function qweqwe(inputs: JSONObject): Promise<QweqweOutput> {
    logger.debug('Calling qweqwe with args: ', inputs);
    const params: QweqweInput = {};
    return transport.execute(QweqweMain, params) as Promise<QweqweOutput>;
}
