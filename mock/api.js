import { success } from './utils/result';

export default {
  'GET /all': (req, res) => {
    let data = [{
      title: '分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }],
      }],
    }, {
      title: '分类分类分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        },],
      },{
        title: '产品名称',
        tags: ['test', '中文'],
        price: 12,
        desc: '下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后下单后',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        },],
      },{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        },],
      },{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        },],
      }],
    },{
      title: '分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }],
      }],
    }, {
      title: '分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }],
      }],
    },{
      title: '分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }],
      }],
    }, {
      title: '分类',
      content: [{
        title: '产品名称',
        images: [{
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }, {
          url: 'http://cdn.hocgin.top/WeChat9d10e753bce3171ba9ad216739778d25.png',
          title: '图片',
        }],
      }],
    }];
    return res.json(success([
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ...data,
      ]),
    );
  },

};