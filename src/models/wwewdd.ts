import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const WqedvfgMain = new eradaniConnect.run.Sql(` select * from qgpl.application`);
export interface WqedvfgInput {}
export type WqedvfgOutputRecord = JSONObject;
export interface WqedvfgOutput extends Array<WqedvfgOutputRecord> {}
