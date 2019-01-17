export interface INodeAPI {
    addresses: {
        balance(address: string, confirmations?: number): Promise<any>;
        balanceDetails(address: string): Promise<any>;
    };
    aliases: {
        byAlias(alias: string): Promise<any>;
        byAddress(address: string): Promise<any>;
    };
    assets: {
        balances(address: string): Promise<any>;
        balance(address: string, assetId: string): Promise<any>;
        distribution(assetId: string): Promise<any>;
    };
    blocks: {
        get(signature: string): Promise<any>;
        at(height: number): Promise<any>;
        first(): Promise<any>;
        last(): Promise<any>;
        height(): Promise<any>;
    };
    leasing: {
        getAllActiveLeases(address: string): Promise<any>;
    };
    transactions: {
        get(id: string): Promise<any>;
        getList(address: string): Promise<any>;
        utxSize(): Promise<any>;
        utxGet(id: string): Promise<any>;
        utxGetList(): Promise<any>;
    };
    utils: {
        time(): Promise<number>;
        script: {
            compile(code: string): Promise<string>;
        };
    };
}
export declare const addresses: {
    balance(address: string, confirmations?: number): Promise<any>;
    balanceDetails(address: string): Promise<any>;
};
export declare const aliases: {
    byAlias(alias: string): Promise<any>;
    byAddress(address: string): Promise<any>;
};
export declare const assets: {
    balances(address: string): Promise<any>;
    balance(address: string, assetId: string): Promise<any>;
    distribution(assetId: string): Promise<any>;
};
export declare const blocks: {
    get(signature: string): Promise<any>;
    at(height: number): Promise<any>;
    first(): Promise<any>;
    last(): Promise<any>;
    height(): Promise<any>;
};
export declare const leasing: {
    getAllActiveLeases(address: any): Promise<any>;
};
export declare const transactions: {
    get(id: string): Promise<any>;
    getList(address: string, limit?: number): Promise<any>;
    utxSize(): Promise<any>;
    utxGet(id: string): Promise<any>;
    utxGetList(): Promise<any>;
    broadcast(type: string, data: any, keys: any): Promise<any>;
    rawBroadcast(data: any): Promise<any>;
};
export declare const utils: {
    time(): Promise<any>;
    script: {
        compile(code: string): Promise<string>;
    };
};
