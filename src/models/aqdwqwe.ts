import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwqeMain = new eradaniConnect.run.Sql(` sadfdsfdsf`);
export interface QwqeInput {}
export type QwqeOutputRecord = JSONObject;
export interface QwqeOutput extends Array<QwqeOutputRecord> {}
