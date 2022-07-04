import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqfMain, QweqfOutput, QweqfInput } from 'src/models/tuval';

const logger = createLogger('controllers/tuval');

export async function qweqf(inputs: JSONObject): Promise<QweqfOutput> {
    logger.debug('Calling qweqf with args: ', inputs);
    const params: QweqfInput = {};
    return transport.execute(QweqfMain, params) as Promise<QweqfOutput>;
}
