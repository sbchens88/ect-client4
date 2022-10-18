import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { TestingMain, TestingOutput, TestingInput } from 'src/models/api';

const logger = createLogger('controllers/api');

export async function testing(inputs: JSONObject): Promise<TestingOutput> {
    logger.debug('Calling testing with args: ', inputs);
    const params: TestingInput = {};
    return transport.execute(TestingMain, params) as Promise<TestingOutput>;
}
