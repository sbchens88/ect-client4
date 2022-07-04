import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EdsafgvbfdMain = new eradaniConnect.run.Sql(` sdf`);
export interface EdsafgvbfdInput {}
export type EdsafgvbfdOutputRecord = JSONObject;
export interface EdsafgvbfdOutput extends Array<EdsafgvbfdOutputRecord> {}
