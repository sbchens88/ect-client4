import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QsedvvvMain = new eradaniConnect.run.Sql(` `);
export interface QsedvvvInput {}
export type QsedvvvOutputRecord = JSONObject;
export interface QsedvvvOutput extends Array<QsedvvvOutputRecord> {}
