import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdsaMain, AsdsaOutput, AsdsaInput } from 'src/models/delete';

const logger = createLogger('controllers/_delete');

export async function asdsa(inputs: JSONObject): Promise<AsdsaOutput> {
    logger.debug('Calling asdsa with args: ', inputs);
    const params: AsdsaInput = {};
    return transport.execute(AsdsaMain, params) as Promise<AsdsaOutput>;
}
