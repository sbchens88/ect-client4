import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqedcsMain = new eradaniConnect.run.Sql(` select * from asdasdas`);
export interface WqedcsInput {}
export type WqedcsOutputRecord = JSONObject;
export interface WqedcsOutput extends Array<WqedcsOutputRecord> {}
