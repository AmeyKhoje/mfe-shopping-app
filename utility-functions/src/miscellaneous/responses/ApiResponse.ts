interface ApiResponseModel {
  success: boolean;
  message: string;
  extras?: any;
}

class ApiResponse {
  private success: boolean = false;
  private message: string = '';
  private extras: any = {};

  constructor(success: boolean, message: string, extras: any = {}) {
    this.success = success;
    this.message = message;
    this.extras = extras;
  }

  getObject(): ApiResponseModel {
    return {
      success: this.success,
      message: this.message,
      extras: this.extras,
    };
  }
}

export default ApiResponse;
