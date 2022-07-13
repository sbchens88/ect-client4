import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedhicMain = new eradaniConnect.run.Sql(` select`);
export interface QwedhicInput {}
export type QwedhicOutputRecord = JSONObject;
export interface QwedhicOutput extends Array<QwedhicOutputRecord> {}
