import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EwqadscMain, EwqadscOutput, EwqadscInput } from 'src/models/asdasawe';

const logger = createLogger('controllers/asdasawe');

export async function ewqadsc(inputs: JSONObject): Promise<EwqadscOutput> {
    logger.debug('Calling ewqadsc with args: ', inputs);
    const params: EwqadscInput = {};
    return transport.execute(EwqadscMain, params) as Promise<EwqadscOutput>;
}
