import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedfdfMain, QwedfdfOutput, QwedfdfInput } from 'src/models/asassss';

const logger = createLogger('controllers/asassss');

export async function qwedfdf(inputs: JSONObject): Promise<QwedfdfOutput> {
    logger.debug('Calling qwedfdf with args: ', inputs);
    const params: QwedfdfInput = {};
    return transport.execute(QwedfdfMain, params) as Promise<QwedfdfOutput>;
}
