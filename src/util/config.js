export default class Config {
  /**
   * 服务器地址
   * @returns {string}
   */
  static host() {
    if (Config.isDev()) {
      return `http://${document.location.host}`;
    }
    return 'https://naifen.remmoe.com/api';
    // return 'http://120.79.64.153:8080';
    // return 'http://192.168.1.245:8080';
  }

  /**
   * 是否开发模式
   * @returns {boolean}
   */
  static isDev() {
    return false;
  }
}