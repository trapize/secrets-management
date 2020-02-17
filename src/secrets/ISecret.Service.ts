/**
 *
 *
 * @export
 * @interface ISecretService
 */
export interface ISecretService {
    /**
     *
     *
     * @param {string} name
     * @returns {Promise<string>}
     * @memberof ISecretService
     */
    get(name: string): Promise<string>;
    /**
     *
     *
     * @param {string} name
     * @param {string} secret
     * @returns {Promise<void>}
     * @memberof ISecretService
     */
    set(name: string, secret: string): Promise<void>;
}