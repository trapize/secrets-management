/**
 *
 *
 * @export
 * @interface ISecretAppSettings
 */
export interface ISecretAppSettings {
    /**
     *
     *
     * @type {ICryptoSettings}
     * @memberof ISecretAppSettings
     */
    crypto: ICryptoSettings;
}

/**
 *
 *
 * @export
 * @interface ICryptoSettings
 */
export interface ICryptoSettings {
    /**
     *
     *
     * @type {IKmsSettings}
     * @memberof ICryptoSettings
     */
    kms: IKmsSettings;
    /**
     *
     *
     * @type {IStorageSettings}
     * @memberof ICryptoSettings
     */
    storage: IStorageSettings;
}

/**
 *
 *
 * @export
 * @interface IKmsSettings
 */
export interface IKmsSettings {
    account: string;
    /**
     *
     *
     * @type {string}
     * @memberof IKmsSettings
     */
    projectId: string;
    /**
     *
     *
     * @type {string}
     * @memberof IKmsSettings
     */
    locationId: string;
    /**
     *
     *
     * @type {string}
     * @memberof IKmsSettings
     */
    keyRingId: string;
    /**
     *
     *
     * @type {string}
     * @memberof IKmsSettings
     */
    cryptoKeyId: string;
}

/**
 *
 *
 * @export
 * @interface IStorageSettings
 */
export interface IStorageSettings {
    account: string;
    /**
     *
     *
     * @type {string}
     * @memberof IStorageSettings
     */
    bucket: string;
    /**
     *
     *
     * @type {string}
     * @memberof IStorageSettings
     */
    localTempDir: string;
    /**
     *
     *
     * @type {string}
     * @memberof IStorageSettings
     */
    remoteDir: string;
    /**
     *
     *
     * @type {string}
     * @memberof IStorageSettings
     */
    fileExtension: string;
}