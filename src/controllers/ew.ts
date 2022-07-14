import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { PqpqpMain, PqpqpOutput, PqpqpInput } from 'src/models/ew';

const logger = createLogger('controllers/ew');

export async function pqpqp(inputs: JSONObject): Promise<PqpqpOutput> {
    logger.debug('Calling pqpqp with args: ', inputs);
    const params: PqpqpInput = {};
    return transport.execute(PqpqpMain, params) as Promise<PqpqpOutput>;
}
