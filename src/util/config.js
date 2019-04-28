export default class Config {
  /**
   * 服务器地址
   * @returns {string}
   */
  static host() {
    if (Config.isDev()) {
      return `http://${document.location.host}`;
    }
    return 'http://api.caiyunapp.com';
  }

  /**
   * 是否开发模式
   * @returns {boolean}
   */
  static isDev() {
    return true;
  }
}