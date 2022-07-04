import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QedfvMain = new eradaniConnect.run.Sql(` asdsad`);
export interface QedfvInput {}
export type QedfvOutputRecord = JSONObject;
export interface QedfvOutput extends Array<QedfvOutputRecord> {}
