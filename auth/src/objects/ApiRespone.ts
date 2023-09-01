import ApiResponseModel from 'src/models/ApiResponseModel';

export default class ApiResponse {
  private status: boolean = false;
  private message: string = '';

  constructor(status: boolean, message: string) {
    this.status = status;
    this.message = message;
  }

  getObject(): ApiResponseModel {
    return {
      status: this.status,
      message: this.message,
    };
  }
}
