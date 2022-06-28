import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwerfdsfMain = new eradaniConnect.run.Sql(`select * from asd`);
export interface QwerfdsfInput {}
export type QwerfdsfOutputRecord = JSONObject;
export interface QwerfdsfOutput extends Array<QwerfdsfOutputRecord> {}
