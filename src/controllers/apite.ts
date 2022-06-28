import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdhytMain, AsdhytOutput, AsdhytInput } from 'src/models/apite';

const logger = createLogger('controllers/apite');

export async function asdhyt(inputs: JSONObject): Promise<AsdhytOutput> {
    logger.debug('Calling asdhyt with args: ', inputs);
    const params: AsdhytInput = {};
    return transport.execute(AsdhytMain, params) as Promise<AsdhytOutput>;
}
