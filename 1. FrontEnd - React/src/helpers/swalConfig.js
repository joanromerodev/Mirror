import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  customClass: {
    popup: "dark:!bg-gray-800 dark:text-white",
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
    toast.style.marginTop = "5rem";
  },
});

const DeleteSwal = (name) => {
  return {
    title: "Are you sure?",
    html: `<div class="text-lg my-6">You're about to delete <span class="text-purple-500 dark:text-white font-semibold">${name}</span></div>`,
    icon: "error",
    showCancelButton: true,
    cancelButtonText: "No, cancel!",
    confirmButtonText: "Yep, delete it!",
    buttonsStyling: false,
    customClass: {
      popup: "dark:bg-gray-800 dark:text-white",
      confirmButton:
        "mx-2 mb-4 px-4 py-2 text-sm font-medium outline-none text-center text-red-600 bg-white border border-red-500 rounded-lg hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
      cancelButton:
        "mx-2 mb-4 px-4 py-2 text-sm font-medium outline-none text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    },
  };
};

export { Toast, DeleteSwal };
