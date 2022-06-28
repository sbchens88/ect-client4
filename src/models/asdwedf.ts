import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwewerdfMain = new eradaniConnect.run.Sql(` select * from sdad`);
export interface QwewerdfInput {}
export type QwewerdfOutputRecord = JSONObject;
export interface QwewerdfOutput extends Array<QwewerdfOutputRecord> {}
