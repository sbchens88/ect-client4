import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SdaMain, SdaOutput, SdaInput } from 'src/models/asdss';

const logger = createLogger('controllers/asdss');

export async function sda(inputs: JSONObject): Promise<SdaOutput> {
    logger.debug('Calling sda with args: ', inputs);
    const params: SdaInput = {};
    return transport.execute(SdaMain, params) as Promise<SdaOutput>;
}
