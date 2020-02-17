/**
 *
 *
 * @export
 * @interface IStorageClient
 */
export interface IStorageClient {
    /**
     *
     *
     * @param {string} name
     * @returns {IBucket}
     * @memberof IStorageClient
     */
    bucket(name: string): IBucket;
}

/**
 *
 *
 * @interface IBucket
 */
interface IBucket {
    /**
     *
     *
     * @param {string} path
     * @param {{destination: string}} request
     * @returns {Promise<void>}
     * @memberof IBucket
     */
    upload(path: string, request: {destination: string}): Promise<void>;
    /**
     *
     *
     * @param {string} path
     * @returns {IBucketFile}
     * @memberof IBucket
     */
    file(path: string): IBucketFile;
}

/**
 *
 *
 * @interface IBucketFile
 */
interface IBucketFile {
    /**
     *
     *
     * @param {{destination: string}} request
     * @returns {Promise<void>}
     * @memberof IBucketFile
     */
    download(request: {destination: string}): Promise<void>;
}