import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwdsMain = new eradaniConnect.run.Sql(`asdsad`);
export interface QwdsInput {}
export type QwdsOutputRecord = JSONObject;
export interface QwdsOutput extends Array<QwdsOutputRecord> {}
