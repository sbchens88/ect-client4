import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweqwdMain = new eradaniConnect.run.Sql(` asdasdmf`);
export interface QweqwdInput {}
export type QweqwdOutputRecord = JSONObject;
export interface QweqwdOutput extends Array<QweqwdOutputRecord> {}
