import toastr from 'toastr';

export default function (translate) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    return {
        success: function (message) {
            if (!message)
                message = translate('Done successfully');
            toastr.success(message);
        },
        info: function (message) {
            toastr.info(message);
        },
        warning: function (message) {
            toastr.warning(message);
        },
        error: function (message) {
            toastr.error(message);
        }
    }
}


