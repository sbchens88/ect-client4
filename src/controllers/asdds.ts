import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwerfdsfMain, QwerfdsfOutput, QwerfdsfInput } from 'src/models/asdds';

const logger = createLogger('controllers/asdds');

export async function qwerfdsf(inputs: JSONObject): Promise<QwerfdsfOutput> {
    logger.debug('Calling qwerfdsf with args: ', inputs);
    const params: QwerfdsfInput = {};
    return transport.execute(QwerfdsfMain, params) as Promise<QwerfdsfOutput>;
}
