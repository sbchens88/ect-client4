import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqwMain, QweqwOutput, QweqwInput } from 'src/models/weew';

const logger = createLogger('controllers/weew');

export async function qweqw(inputs: JSONObject): Promise<QweqwOutput> {
    logger.debug('Calling qweqw with args: ', inputs);
    const params: QweqwInput = {};
    return transport.execute(QweqwMain, params) as Promise<QweqwOutput>;
}
