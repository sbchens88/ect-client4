import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { WqerufgyvMain, WqerufgyvOutput, WqerufgyvInput } from 'src/models/gdbvsdfg';

const logger = createLogger('controllers/gdbvsdfg');

export async function wqerufgyv(inputs: JSONObject): Promise<WqerufgyvOutput> {
    logger.debug('Calling wqerufgyv with args: ', inputs);
    const params: WqerufgyvInput = {};
    return transport.execute(WqerufgyvMain, params) as Promise<WqerufgyvOutput>;
}
