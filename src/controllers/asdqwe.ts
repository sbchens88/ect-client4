import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqwdMain, QweqwdOutput, QweqwdInput } from 'src/models/asdqwe';

const logger = createLogger('controllers/asdqwe');

export async function qweqwd(inputs: JSONObject): Promise<QweqwdOutput> {
    logger.debug('Calling qweqwd with args: ', inputs);
    const params: QweqwdInput = {};
    return transport.execute(QweqwdMain, params) as Promise<QweqwdOutput>;
}
