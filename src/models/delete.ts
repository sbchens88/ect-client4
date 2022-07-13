import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdsaMain = new eradaniConnect.run.Sql(` asdff`);
export interface AsdsaInput {}
export type AsdsaOutputRecord = JSONObject;
export interface AsdsaOutput extends Array<AsdsaOutputRecord> {}
