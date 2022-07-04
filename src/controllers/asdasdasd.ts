import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EdsafgvbfdMain, EdsafgvbfdOutput, EdsafgvbfdInput } from 'src/models/asdasdasd';

const logger = createLogger('controllers/asdasdasd');

export async function edsafgvbfd(inputs: JSONObject): Promise<EdsafgvbfdOutput> {
    logger.debug('Calling edsafgvbfd with args: ', inputs);
    const params: EdsafgvbfdInput = {};
    return transport.execute(EdsafgvbfdMain, params) as Promise<EdsafgvbfdOutput>;
}
