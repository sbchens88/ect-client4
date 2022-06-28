import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweweMain, QweweOutput, QweweInput } from 'src/models/asdsadasdww';

const logger = createLogger('controllers/asdsadasdww');

export async function qwewe(inputs: JSONObject): Promise<QweweOutput> {
    logger.debug('Calling qwewe with args: ', inputs);
    const params: QweweInput = {};
    return transport.execute(QweweMain, params) as Promise<QweweOutput>;
}
