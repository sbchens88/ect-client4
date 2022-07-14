import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const PqpqpMain = new eradaniConnect.run.Sql(` select `);
export interface PqpqpInput {}
export type PqpqpOutputRecord = JSONObject;
export interface PqpqpOutput extends Array<PqpqpOutputRecord> {}
