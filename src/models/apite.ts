import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdhytMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdhytInput {}
export type AsdhytOutputRecord = JSONObject;
export interface AsdhytOutput extends Array<AsdhytOutputRecord> {}
