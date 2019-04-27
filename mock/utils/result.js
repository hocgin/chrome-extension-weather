/**
 * 模拟返回结构
 */
export default function result(
  code,
  message,
  result,
) {
  return {
    code: code,
    message: message,
    result: result,
  };
};

export function success(data = null) {
  return result(200, 'ok', data);
}

export function error(message = 'error', data = null) {
  return result(500, message, data);
}