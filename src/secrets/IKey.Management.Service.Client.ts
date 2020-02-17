type EncryptResult = [{ciphertext: Buffer}];
type DecryptResult = [{plaintext: Buffer}];

/**
 *
 *
 * @export
 * @interface IKeyManagementServiceClient
 */
export interface IKeyManagementServiceClient {
    /**
     *
     *
     * @param {string} projectId
     * @param {string} locationId
     * @param {string} keyRingId
     * @param {string} cryptoKeyId
     * @returns {string}
     * @memberof IKeyManagementServiceClient
     */
    cryptoKeyPath(
        projectId: string,
        locationId: string,
        keyRingId: string,
        cryptoKeyId: string
    ): string;

    /**
     *
     *
     * @param {{name: string, plaintext: string}} request
     * @returns {Promise<EncryptResult>}
     * @memberof IKeyManagementServiceClient
     */
    encrypt(request: {name: string, plaintext: string}): Promise<EncryptResult>;
    /**
     *
     *
     * @param {{name: string, ciphertext: string}} request
     * @returns {Promise<DecryptResult>}
     * @memberof IKeyManagementServiceClient
     */
    decrypt(request: {name: string, ciphertext: string}): Promise<DecryptResult>;
}