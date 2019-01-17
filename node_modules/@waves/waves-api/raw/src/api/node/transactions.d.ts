declare const _default: {
    get(id: string): Promise<any>;
    getList(address: string, limit?: number): Promise<any>;
    utxSize(): Promise<any>;
    utxGet(id: string): Promise<any>;
    utxGetList(): Promise<any>;
    broadcast(type: string, data: any, keys: any): Promise<any>;
    rawBroadcast(data: any): Promise<any>;
};
export default _default;
