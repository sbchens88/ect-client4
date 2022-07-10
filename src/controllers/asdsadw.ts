import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwdsMain, QwdsOutput, QwdsInput } from 'src/models/asdsadw';

const logger = createLogger('controllers/asdsadw');

export async function qwds(inputs: JSONObject): Promise<QwdsOutput> {
    logger.debug('Calling qwds with args: ', inputs);
    const params: QwdsInput = {};
    return transport.execute(QwdsMain, params) as Promise<QwdsOutput>;
}
