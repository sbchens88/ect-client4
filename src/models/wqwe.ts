import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedfddMain = new eradaniConnect.run.Sql(` select * from qwe`);
export interface QwedfddInput {}
export type QwedfddOutputRecord = JSONObject;
export interface QwedfddOutput extends Array<QwedfddOutputRecord> {}
