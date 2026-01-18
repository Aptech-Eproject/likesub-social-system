import Swal, { SweetAlertOptions } from "sweetalert2";

export const confirmAction = (
  options: SweetAlertOptions
) => Swal.fire({
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Đồng ý",
  cancelButtonText: "Hủy bỏ",
  reverseButtons: true,

  // custom styling
  customClass: {
    popup: 'custom-swal-popup',
    title: 'custom-swal-title',
    htmlContainer: 'custom-swal-text',
    confirmButton: 'custom-swal-confirm',
    cancelButton: 'custom-swal-cancel',
    icon: 'custom-swal-icon'
  },

  // button styling
  buttonsStyling: false,

  // animation
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  },

  ...options,
});