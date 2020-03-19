import React from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';
import { createForm } from 'rc-form';
import Utils from '@/util/util';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class index extends React.Component {

  render() {
    let {
      form: { getFieldDecorator },
      ...rest
    } = this.props;

    return (<Modal title="添加自定义经纬度"
                   {...rest}
                   onOk={this.onOk}>
      <Form {...formItemLayout}>
        <Form.Item label="位置名称" hasFeedback>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: '请输入位置名称' }],
          })(<Input type="text" placeholder="位置名称"/>)}
        </Form.Item>
        <Form.Item label="经度" hasFeedback>
          {getFieldDecorator('lng', {
            rules: [{ required: true, message: '请输入经度' },
              { required: true, message: '请输入经度(0~180)' }],
          })(<InputNumber type="number" max={180} min={0} placeholder="经度"/>)}
        </Form.Item>
        <Form.Item label="纬度" hasFeedback>
          {getFieldDecorator('lat', {
            rules: [{ required: true, message: '请输入纬度(0~90)' }],
          })(<InputNumber type="number" max={90} min={0} placeholder="纬度"/>)}
        </Form.Item>
      </Form>
    </Modal>);
  }

  onOk = () => {
    const { onOk, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!!err) {
        Utils.showErrorHasMessage(err);
        return;
      }
      onOk({ ...values });
    });
  };
}

let wrapper = createForm()(index);
export default wrapper;