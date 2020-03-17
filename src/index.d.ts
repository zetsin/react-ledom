import React, { FC, ReactElement } from 'react';
export declare const Store: Map<Function, {
    context: React.Context<Model<any>>;
    setState: React.Dispatch<React.SetStateAction<Model<any>>>;
}>;
export interface ModelProps<T = any> {
    state: T;
}
export declare abstract class Model<T = any> implements ModelProps<T> {
    abstract state: T;
    setState(data?: Partial<T>): void;
}
export declare const Provider: FC<{
    values: Model[];
}>;
export declare const Consumer: <M extends Model>(props: {
    model: new () => M;
    children: (value: M) => (ReactElement | null);
}) => (ReactElement | null);
export declare const useModel: <M extends Model>(model: new () => M) => M;
