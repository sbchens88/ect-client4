import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweqMain = new eradaniConnect.run.Sql(` sad`);
export interface QweqInput {}
export type QweqOutputRecord = JSONObject;
export interface QweqOutput extends Array<QweqOutputRecord> {}
