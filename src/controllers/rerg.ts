import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WerwerwefdsMain, WerwerwefdsOutput, WerwerwefdsInput } from 'src/models/rerg';

const logger = createLogger('controllers/rerg');

export async function werwerwefds(inputs: JSONObject): Promise<WerwerwefdsOutput> {
    logger.debug('Calling werwerwefds with args: ', inputs);
    const params: WerwerwefdsInput = {};
    return transport.execute(WerwerwefdsMain, params) as Promise<WerwerwefdsOutput>;
}
