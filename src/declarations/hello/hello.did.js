export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalace' : IDL.Func([], [IDL.Float64], []),
    'compound' : IDL.Func([], [], ['oneway']),
    'demo' : IDL.Func([], [IDL.Float64], []),
    'topUp' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'withDraw' : IDL.Func([IDL.Float64], [IDL.Float64], []),
  });
};
export const init = ({ IDL }) => { return []; };
