import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdfvgweMain = new eradaniConnect.run.Sql(` select * from szdf`);
export interface AsdfvgweInput {}
export type AsdfvgweOutputRecord = JSONObject;
export interface AsdfvgweOutput extends Array<AsdfvgweOutputRecord> {}
