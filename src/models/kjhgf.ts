import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DsfdsfMain = new eradaniConnect.run.Sql(` sdfds * sdfg`);
export interface DsfdsfInput {}
export type DsfdsfOutputRecord = JSONObject;
export interface DsfdsfOutput extends Array<DsfdsfOutputRecord> {}
