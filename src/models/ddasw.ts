import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweqweMain = new eradaniConnect.run.Sql(` seasd`);
export interface QweqweInput {}
export type QweqweOutputRecord = JSONObject;
export interface QweqweOutput extends Array<QweqweOutputRecord> {}
