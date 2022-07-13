import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedhicMain, QwedhicOutput, QwedhicInput } from 'src/models/pppdddll';

const logger = createLogger('controllers/pppdddll');

export async function qwedhic(inputs: JSONObject): Promise<QwedhicOutput> {
    logger.debug('Calling qwedhic with args: ', inputs);
    const params: QwedhicInput = {};
    return transport.execute(QwedhicMain, params) as Promise<QwedhicOutput>;
}
