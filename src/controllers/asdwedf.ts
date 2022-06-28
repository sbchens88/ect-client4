import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwewerdfMain, QwewerdfOutput, QwewerdfInput } from 'src/models/asdwedf';

const logger = createLogger('controllers/asdwedf');

export async function qwewerdf(inputs: JSONObject): Promise<QwewerdfOutput> {
    logger.debug('Calling qwewerdf with args: ', inputs);
    const params: QwewerdfInput = {};
    return transport.execute(QwewerdfMain, params) as Promise<QwewerdfOutput>;
}
