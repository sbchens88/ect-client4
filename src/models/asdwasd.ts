import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DsfdifjigeMain = new eradaniConnect.run.Sql(` ASd`);
export interface DsfdifjigeInput {}
export type DsfdifjigeOutputRecord = JSONObject;
export interface DsfdifjigeOutput extends Array<DsfdifjigeOutputRecord> {}
