import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqrfvMain = new eradaniConnect.run.Sql(` select * from asdf`);
export interface WqrfvInput {}
export type WqrfvOutputRecord = JSONObject;
export interface WqrfvOutput extends Array<WqrfvOutputRecord> {}
