import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweqfMain = new eradaniConnect.run.Sql(` sad`);
export interface QweqfInput {}
export type QweqfOutputRecord = JSONObject;
export interface QweqfOutput extends Array<QweqfOutputRecord> {}
