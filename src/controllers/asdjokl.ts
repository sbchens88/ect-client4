import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwedwqdMain, QwedwqdOutput, QwedwqdInput } from 'src/models/asdjokl';

const logger = createLogger('controllers/asdjokl');

export async function qwedwqd(inputs: JSONObject): Promise<QwedwqdOutput> {
    logger.debug('Calling qwedwqd with args: ', inputs);
    const params: QwedwqdInput = {};
    return transport.execute(QwedwqdMain, params) as Promise<QwedwqdOutput>;
}
