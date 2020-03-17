import React, { Context, createContext, useContext, FC, ReactElement, Dispatch, SetStateAction, useState } from 'react'

export const Store = new Map<Function, {
  context: Context<Model>,
  setState: Dispatch<SetStateAction<Model>>
}>();

export interface ModelProps<T = any> {
  state: T;
}

export abstract class Model<T = any> implements ModelProps<T> {
  abstract state: T;
  setState(data?: Partial<T>) {
    Object.assign(this.state, data);
    Store.get(this.constructor)?.setState({
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
  Store.set(value.constructor, {
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
  values: Model[],
}> = ({
  values,
  children,
}) => {
  return values.map(value => ({
    context: createContext(value),
    value
  })).reduce((acc, {context, value}) => (
    <ContextProvider context={context} value={value}>
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
  children: (value: M) => (ReactElement|null);
}) => (ReactElement|null) = ({
  model,
  children,
}) => {
  const context = Store.get(model)?.context;
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
  const context = Store.get(model)?.context;
  if(!context) {
    throw Error("404");
  }
  
  return useContext(context) as any;
}
