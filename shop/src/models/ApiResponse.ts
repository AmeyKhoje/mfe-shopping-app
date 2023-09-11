import * as yup from 'yup';

export interface ApiResponseInterface {
  success: boolean;
  message: string;
  extra?: yup.AnyObject | yup.AnyObject[] | string[] | string;
}

class ApiResponse {
  private success: boolean = false;
  private message: string = '';
  private extra: yup.AnyObject | yup.AnyObject[] | string[] | string = {};

  constructor(
    message: string,
    success: boolean,
    extra: yup.AnyObject | yup.AnyObject[] | string[] | string = {}
  ) {
    this.message = message;
    this.success = success;
    this.extra = extra;
  }

  getResponse(): ApiResponseInterface {
    return {
      message: this.message,
      success: this.success,
      extra: this.extra,
    };
  }
}

export default ApiResponse;
