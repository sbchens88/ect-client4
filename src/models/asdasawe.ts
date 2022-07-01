import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EwqadscMain = new eradaniConnect.run.Sql(` asdasdas`);
export interface EwqadscInput {}
export type EwqadscOutputRecord = JSONObject;
export interface EwqadscOutput extends Array<EwqadscOutputRecord> {}
