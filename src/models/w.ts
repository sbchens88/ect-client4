import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdMain = new eradaniConnect.run.Sql(` sead`);
export interface AsdInput {}
export type AsdOutputRecord = JSONObject;
export interface AsdOutput extends Array<AsdOutputRecord> {}
