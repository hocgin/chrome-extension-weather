import {message} from 'antd';
import moment from 'moment';
import data from './region2';
import CLEAR_DAY from '@/assets/weather/png/CLEAR_DAY.png';
import CLEAR_NIGHT from '@/assets/weather/png/CLEAR_NIGHT.png';
import PARTLY_CLOUDY_DAY from '@/assets/weather/png/PARTLY_CLOUDY_DAY.png';
import PARTLY_CLOUDY_NIGHT from '@/assets/weather/png/PARTLY_CLOUDY_NIGHT.png';
import CLOUDY from '@/assets/weather/png/CLOUDY.png';
import WIND from '@/assets/weather/png/WIND.png';
import HAZE from '@/assets/weather/png/HAZE.png';
import RAIN from '@/assets/weather/png/RAIN.png';
import SNOW from '@/assets/weather/png/SNOW.png';

export default class Util {

  /**
   * 自动输出第一条错误信息
   * @param errors
   */
  static showErrorHasMessage(errors) {
    let keys = Object.keys(errors || {});
    if (keys.length > 0) {
      let error = errors[keys[0]];
      message.error(error.errors[0].message);
    }
  }

  /**
   * 如果没有过期，则获取缓存数据
   * @param key
   * @returns {*}
   */
  static getCacheResponse(key) {
    let expiredKey = `${key}_EXPIRED`;
    let expiredTimestamp = localStorage.getItem(expiredKey);
    try {
      if (!moment().isAfter(expiredTimestamp * 1)) {
        return JSON.parse(localStorage.getItem(key));
      }
    } catch (e) {
      localStorage.removeItem(expiredKey);
    }
    return null;
  }

  /**
   * 缓存数据
   * @param key
   * @param data
   * @param expired
   */
  static putCacheResponse(key, data, expired = 0) {
    let expiredKey = `${key}_EXPIRED`;
    localStorage.setItem(expiredKey, new Date().getTime() + expired);
    localStorage.setItem(key, JSON.stringify(data || '{}'));
  }

  /**
   * 进行缓存请求
   * @param key
   * @param expired
   * @param request
   * @returns {*}
   */
  static cacheResponse(key, expired = 0, request) {
    let response = Util.getCacheResponse(key);
    if (response) {
      return response;
    }
    response = request();
    Util.putCacheResponse(key, response, expired);
    return response;
  }

  /**
   * 加载中
   */
  static isLoading(isLoading) {
    return isLoading === undefined || isLoading === true;
  }

  /**
   * 搜索关键词过滤
   * @param inputValue
   * @param path
   * @returns {*|boolean}
   */
  static filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }


  /**
   * 获取最后一个元素
   * @param arr
   * @param def
   * @returns {string}
   */
  static getLastEle(arr, def = 'N/A') {
    if (!arr || arr.length === 0) {
      return def;
    }

    return arr[arr.length - 1];
  }

  /**
   * 所有地区
   * @returns {*|Array}
   */
  static getAllRegions() {
    return data() || [];
  }

  /**
   * 通过值形式获取唯一城市
   * 例如:`福建省,厦门市,湖里区`
   * @param value
   * @returns {*}
   */
  static getRegion(value) {
    let labels = `${value}`.split(',');

    let data = this.getAllRegions();
    for (let i = 0; i < labels.length; i++) {
      let label = labels[i];
      let one = this.getRegionForValue(data, label);
      if (i < (labels.length - 1)) {
        data = one.children;
        continue;
      }
      return one;
    }
  }

  /**
   * 通过标签名查找对应的城市信息
   * @param data
   * @param label
   * @returns {*}
   */
  static getRegionForValue(data, label) {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.label === label) {
        return item;
      }
    }
    return null;
  }

  /**
   * 获取默认城市
   * @returns {{isLoading: boolean, isDefault: boolean, address: string[], temperature: string, latlng: number[], desc: string}}
   */
  static getDefaultRegions() {
    let region = this.getRegion(`福建省,厦门市,湖里区`);
    return {
      id: `${region.value}`,
      address: [...region.value.split(',')],
      latlng: region.latlng,
      isDefault: true,
    };
  }

  /**
   * 获取主题色
   * @returns {string}
   */
  static getThemeColor() {

    return '';
  }


  static getSkyconSvg(skycon) {
    switch (skycon) {
      // 晴（白天）
      case 'CLEAR_DAY': {
        return CLEAR_DAY;
      }
      // 晴（夜间）
      case 'CLEAR_NIGHT': {
        return CLEAR_NIGHT;
      }
      // 多云（白天）
      case 'PARTLY_CLOUDY_DAY': {
        return PARTLY_CLOUDY_DAY;
      }
      // 多云（夜间）
      case 'PARTLY_CLOUDY_NIGHT': {
        return PARTLY_CLOUDY_NIGHT;
      }
      // 阴
      case 'CLOUDY': {
        return CLOUDY;
      }
      // 大风
      case 'WIND': {
        return WIND;
      }
      // 雾霾
      case 'HAZE': {
        return HAZE;
      }
      // 雨
      case 'RAIN': {
        return RAIN;
      }
      // 雪
      case 'SNOW': {
        return SNOW;
      }
      default: {
        return CLEAR_DAY;
      }
    }
  };

  static updateSkyconColor(skycon) {
    let color = {
      'CLEAR_DAY': 'rgb(54,111,205)',
      'CLEAR_NIGHT': 'rgb(36,76,134)',
      'SNOW': 'rgb(84,57,160)',
      'PARTLY_CLOUDY_DAY': 'rgb(125,159,189)',
      'PARTLY_CLOUDY_NIGHT': 'rgb(107,143,175)',
      'WIND': 'rgb(76,107,69)',
      'CLOUDY': 'rgb(141,141,141)',
      'HAZE': 'rgb(160,112,72)',
      'RAIN': 'rgb(60,126,155)',
    };

    try {
      let okColor = color[skycon] || color['CLEAR_DAY'];
      okColor = okColor.replace('rgb(', '')
        .replace(')', '');
      document.body.style.setProperty('--themeColor', okColor);
      document.body.style.setProperty('--textValueColor', okColor);
    } catch (e) {
      console.error(e);
    }
  }


  static setStorage(key, value) {
    if (!value) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getStorage(key, def = null) {
    let value = localStorage.getItem(key);
    if (!value) {
      return def;
    }
    return JSON.parse(value);
  }
}
