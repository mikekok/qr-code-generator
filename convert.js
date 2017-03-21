const remote = require('electron').remote

$(document).ready(function() {

    // Window Controls

    $(".winmini").click(function() {
        var window = remote.getCurrentWindow();
        window.minimize();
    });

    // $(".winmax").click(function() {
    //     var window = remote.getCurrentWindow();
    //     if (!window.isMaximized()) {
    //         window.maximize();
    //     } else {
    //         window.unmaximize();
    //     }
    // });

    $(".winclose").click(function() {
        var window = remote.getCurrentWindow();
        window.close();
    });

    // Convert to QR Code

    new Vue({
        el: '#app',
        data: {
            plainText: ''
        },
        methods: {
            setImage: function() {
                if (this.plainText != '') {
                    return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + this.plainText;
                } else {
                    return "assets/img/default.png";
                }
            }
        }
    })
});
