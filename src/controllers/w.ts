import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdMain, AsdOutput, AsdInput } from 'src/models/w';

const logger = createLogger('controllers/w');

export async function asd(inputs: JSONObject): Promise<AsdOutput> {
    logger.debug('Calling asd with args: ', inputs);
    const params: AsdInput = {};
    return transport.execute(AsdMain, params) as Promise<AsdOutput>;
}
