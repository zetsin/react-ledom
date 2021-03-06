import React, { FC, ReactElement } from 'react';
export declare const Stores: Map<Function, {
    context: React.Context<Model<any>>;
    setState: React.Dispatch<React.SetStateAction<Model<any>>>;
}>;
export declare abstract class Model<T = any> {
    readonly abstract state: T;
    setState(data?: Partial<T>): void;
}
export declare const Provider: FC<{
    stores: Model[];
}>;
export declare const Consumer: <M extends Model>(props: {
    model: new () => M;
    children: (store: M) => (ReactElement | null);
}) => (ReactElement | null);
export declare const useModel: <M extends Model>(model: new () => M) => M;
