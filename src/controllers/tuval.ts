import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqMain, QweqOutput, QweqInput } from 'src/models/tuval';

const logger = createLogger('controllers/tuval');

export async function qweq(inputs: JSONObject): Promise<QweqOutput> {
    logger.debug('Calling qweq with args: ', inputs);
    const params: QweqInput = {};
    return transport.execute(QweqMain, params) as Promise<QweqOutput>;
}
