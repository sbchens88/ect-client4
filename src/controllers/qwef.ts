import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdfvgweMain, AsdfvgweOutput, AsdfvgweInput } from 'src/models/qwef';

const logger = createLogger('controllers/qwef');

export async function asdfvgwe(inputs: JSONObject): Promise<AsdfvgweOutput> {
    logger.debug('Calling asdfvgwe with args: ', inputs);
    const params: AsdfvgweInput = {};
    return transport.execute(AsdfvgweMain, params) as Promise<AsdfvgweOutput>;
}
