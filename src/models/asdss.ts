import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SdaMain = new eradaniConnect.run.Sql(` `);
export interface SdaInput {}
export type SdaOutputRecord = JSONObject;
export interface SdaOutput extends Array<SdaOutputRecord> {}
