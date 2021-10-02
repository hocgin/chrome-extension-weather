/**
 * 格式化工具
 */
class Formatter {

  /**
   * AQI 转 文字描述
   * @param aqi
   * @returns {{backgroundColor: string, text: string}}
   */
  static toAirText(aqi) {
    let backgroundColor = 'rgba(93, 0, 32, .8)';
    let airQualityText = '严重';
    if (aqi <= 50) {
      airQualityText = '优';
      backgroundColor = 'rgba(116, 208, 0, .8)';
    } else if (aqi <= 100) {
      airQualityText = '良';
      backgroundColor = 'rgba(244, 211, 32, .8)';
    } else if (aqi <= 150) {
      airQualityText = '轻度';
      backgroundColor = 'rgba(243, 137, 43, .8)';
    } else if (aqi <= 200) {
      airQualityText = '中度';
      backgroundColor = 'rgba(241, 0, 29, .8)';
    } else if (aqi <= 300) {
      airQualityText = '重度';
      backgroundColor = 'rgba(144, 0, 86, .8)';
    }
    return {
      backgroundColor,
      text: airQualityText,
    };
  }

  static cloudrate(v) {
    return v * 100;
  }

  /**
   * 彩云天气码转文字
   */
  static toWeatherText(skycon) {
    switch (skycon) {
      // 晴（白天）
      case 'CLEAR_DAY': {
        return '晴';
      }
      // 晴（夜间）
      case 'CLEAR_NIGHT': {
        return '晴';
      }
      // 多云（白天）
      case 'PARTLY_CLOUDY_DAY': {
        return '多云';
      }
      // 多云（夜间）
      case 'PARTLY_CLOUDY_NIGHT': {
        return '多云';
      }
      // 阴
      case 'CLOUDY': {
        return '阴';
      }
      // 大风
      case 'WIND': {
        return '大风';
      }
      // 雾霾
      case 'HAZE': {
        return '雾霾';
      }
      // 雨
      case 'RAIN': {
        return '雨';
      }
      // 雪
      case 'SNOW': {
        return '雪';
      }
      default: {
        return '未知';
      }
    }
  }


  /**
   * 获取温度
   * [整数部分, 小数部分]
   */
  static getTemperature(temperature) {
    if (!temperature) {
      return ['N/A'];
    }

    return `${temperature}`.split('.');
  }
}

/**
 * 工具类
 */
class Util {
  /**
   * 请求
   * @param url
   * @param callback
   * @constructor
   */
  static get(url, callback) {
    let request = new XMLHttpRequest();
    let timeout = false;
    let timer = setTimeout(function () {
      timeout = true;
      request.abort();
    }, 2000);
    request.open('GET', url);
    request.onreadystatechange = function () {
      if (request.readyState !== 4) return;
      if (timeout) return;
      clearTimeout(timer);
      if (request.status === 200) {
        callback(request.responseText);
      }
    };
    request.send(null);
  }

  /**
   * 更新角标
   * @param payload
   */
  static updateBadge(payload) {
    // 更新面板
    let {temperature, skycon, aqi} = (payload?.realtime ?? {});
    let badge = localStorage.getItem(LOCAL_STORAGE.USER_CONFIG_BADGE) || 1;

    let text = '';
    switch (badge * 1) {
      // 温度
      case 1: {
        text = `${Formatter.getTemperature(temperature)[0]}°`;
        break;
      }
      // 天气描述
      case 2: {
        text = `${Formatter.toWeatherText(skycon)}`;
        break;
      }
      // 空气质量
      case 3: {
        text = `${Formatter.toAirText(aqi).text}`;
        break;
      }
      // AQI 指数
      case 4: {
        text = `${aqi}`;
        break;
      }
      default:
    }

    window.chrome.browserAction.setBadgeText({
      text,
    });
    window.chrome.browserAction.setIcon({path: `/static/${skycon}.png`});
  }

  /**
   * 异常天气通知
   * @param payload
   */
  static updateNotify(payload) {
    console.log('天气通知', payload)
    // let alert = payload?.alert;
    // if (alert?.status !== 'ok') {
    //   return;
    // }
    // let content = alert?.content || [];
    // if (content.length === 0) {
    //   return;
    // }
    // let description = content[0]?.description;
    // if (!description) {
    //   return;
    // }
    new Notification("Granted!");
    Util.sendNotification('天气预警', '测试');
  }

  static sendNotification(title, body) {
    console.log('Notification', Notification.permission);

    let notification = window.chrome.notifications.create(`${new Date().getTime()}`, {
      type: 'basic',
      title,
      message: body,
      iconUrl: window.chrome.extension.getURL("/static/LOGO_128.png"),
    }, (id) => setTimeout(() => window.chrome.notifications.clear(id, console.debug), 5000));
    console.log('notification', notification)
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


let LOCAL_STORAGE = {
  REQUEST_WEATHER_URI: 'REQUEST_WEATHER_URI',
  USER_CONFIG_BADGE: 'USER_CONFIG_BADGE',
  RESPONSE_WEATHER_DATA: 'RESPONSE_WEATHER_DATA',
  WEATHER_RESPONSE_LAST_TIME: 'WEATHER_RESPONSE_LAST_TIME',
};

/**
 * 定时任务
 * @type {number}
 */
let interval = 3 * 60 * 1000;
let intervalFunc = () => {
  try {
    let uri = localStorage.getItem(LOCAL_STORAGE.REQUEST_WEATHER_URI);
    console.log('[定时器] 发送请求', uri);
    if (!!uri) {
      Util.get(`http://api.caiyunapp.com${uri}`, (data) => {
        let result = JSON.parse(data || '{}');
        if (result.status === 'ok') {
          let storage = Util.getStorage(LOCAL_STORAGE.RESPONSE_WEATHER_DATA, []);
          storage[0] = result.result;
          Util.setStorage(LOCAL_STORAGE.RESPONSE_WEATHER_DATA, storage);
          Util.updateBadge(result.result);
          // Util.updateNotify(result.result); todo: 目前 Chrome 通知组件没有生效??

          // 设置最后一次更新时间
          localStorage.setItem(LOCAL_STORAGE.WEATHER_RESPONSE_LAST_TIME, new Date().getTime());
        }
      });
    }
  } catch (e) {
    console.error('定时请求出现错误', e);
  } finally {
    window.setTimeout(intervalFunc, interval);
  }
};
intervalFunc();
