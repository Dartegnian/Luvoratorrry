import { Injectable } from '@angular/core';
declare let toastr:any;

@Injectable()
export class ToastrService {
  info(title?: string, message: string) {
    toastr.info(title, message);
  }

  success(title?: string, message: string) {
    toastr.success(title, message);
  }

  warning(title?: string, message: string) {
    toastr.warning(title, message);
  }

  error(title?: string, message: string) {
    toastr.error(title, message);
  }
}
