export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalace' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [IDL.Float64], ['query']),
    'withDraw' : IDL.Func([IDL.Float64], [IDL.Float64], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
