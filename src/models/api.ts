import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestingMain = new eradaniConnect.run.Sql(`select * from adsadsa`);
export interface TestingInput {}
export type TestingOutputRecord = JSONObject;
export interface TestingOutput extends Array<TestingOutputRecord> {}
