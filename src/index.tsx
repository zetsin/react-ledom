import React, { Context, createContext, useContext, FC, ReactElement, Dispatch, SetStateAction, useState } from 'react'

export const Stores = new Map<Function, {
  context: Context<Model>,
  setState: Dispatch<SetStateAction<Model>>
}>();

export abstract class Model<T = any> {
  readonly abstract state: T;
  setState(data?: Partial<T>) {
    Object.assign(this.state, data);
    Stores.get(this.constructor)?.setState({
      ...this,
    });
  };
};

const ContextProvider: FC<{
  context: Context<Model>,
  value: Model
}> = ({
  context,
  value,
  children,
}) => {
  const [ state, setState ] = useState(value);
  Stores.set(value.constructor, {
    context,
    setState
  });

  return (
    <context.Provider value={state}>
      {children}
    </context.Provider>
  );
};

export const Provider: FC<{
  stores: Model[],
}> = ({
  stores,
  children,
}) => {
  return stores.map(store => ({
    context: createContext(store),
    store
  })).reduce((acc, {context, store}) => (
    <ContextProvider context={context} value={store}>
      {acc}
    </ContextProvider>
  ), (
    <>
      {children}
    </>
  ));
};

export const Consumer: <M extends Model>(props: {
  model: new () => M;
  children: (store: M) => (ReactElement|null);
}) => (ReactElement|null) = ({
  model,
  children,
}) => {
  const context = Stores.get(model)?.context;
  if(!context) {
    return null;
  }

  return (
    <context.Consumer>
      {children as any}
    </context.Consumer>
  );
};

export const useModel: <M extends Model>(model: new () => M) => M = (model) => {
  const context = Stores.get(model)?.context;
  if(!context) {
    throw Error("404");
  }
  
  return useContext(context) as any;
}
