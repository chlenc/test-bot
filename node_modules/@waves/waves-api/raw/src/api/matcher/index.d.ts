import { IHash, IKeyPair } from '../../../interfaces';
export interface IMatcherAPI {
    getMatcherKey(): Promise<any>;
    getOrderbooks(): Promise<any>;
    getOrderbook(assetOne: string, assetTwo: string): Promise<any>;
    getOrders(assetOne: string, assetTwo: string, keyPair: IKeyPair): Promise<any>;
    getAllOrders(keyPair: IKeyPair): Promise<any>;
    createOrder(data: IHash<any>, keyPair: IKeyPair): IHash<any>;
    cancelOrder(amountAssetId: string, priceAssetId: string, orderId: string, keyPair: IKeyPair): IHash<any>;
    deleteOrder(amountAssetId: string, priceAssetId: string, orderId: string, keyPair: IKeyPair): IHash<any>;
}
export declare const getMatcherKey: () => Promise<any>;
export declare const getOrderbooks: () => Promise<any>;
export declare const getOrderbook: (assetOne: string, assetTwo: string) => Promise<any>;
export declare const getOrders: (assetOne: string, assetTwo: string, keyPair: IKeyPair) => Promise<any>;
export declare const getAllOrders: (keyPair: IKeyPair) => Promise<any>;
export declare const createOrder: (data: IHash<any>, keyPair: IKeyPair) => Promise<any>;
export declare const cancelOrder: (amountAssetId: string, priceAssetId: string, orderId: string, keyPair: IKeyPair) => Promise<any>;
export declare const deleteOrder: (amountAssetId: string, priceAssetId: string, orderId: string, keyPair: IKeyPair) => Promise<any>;
