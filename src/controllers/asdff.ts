import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QedfvMain, QedfvOutput, QedfvInput } from 'src/models/asdff';

const logger = createLogger('controllers/asdff');

export async function qedfv(inputs: JSONObject): Promise<QedfvOutput> {
    logger.debug('Calling qedfv with args: ', inputs);
    const params: QedfvInput = {};
    return transport.execute(QedfvMain, params) as Promise<QedfvOutput>;
}
