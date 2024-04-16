import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalace' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'demo' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<number>,
  'withDraw' : (arg_0: number) => Promise<number>,
}
