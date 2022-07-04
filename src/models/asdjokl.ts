import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedwqdMain = new eradaniConnect.run.Sql(` asd`);
export interface QwedwqdInput {}
export type QwedwqdOutputRecord = JSONObject;
export interface QwedwqdOutput extends Array<QwedwqdOutputRecord> {}
