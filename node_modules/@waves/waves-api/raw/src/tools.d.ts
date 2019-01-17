import { ITransactionWrapper } from './utils/transactions';
declare const _default: {
    getAddressFromPublicKey(publicKey: string): string;
    calculateTimeDiff(nodeTime: any, userTime: any): number;
    base58: {
        encode: (buffer: number[] | Uint8Array) => string;
        decode: (string: any) => Uint8Array;
    };
    getMinimumDataTxFee(data: any[]): Promise<number>;
    createTransaction: (type: string, data: any) => Promise<ITransactionWrapper>;
};
export default _default;
