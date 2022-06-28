import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweweMain = new eradaniConnect.run.Sql(` asdfsda`);
export interface QweweInput {}
export type QweweOutputRecord = JSONObject;
export interface QweweOutput extends Array<QweweOutputRecord> {}
