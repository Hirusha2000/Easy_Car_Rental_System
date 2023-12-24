
let baseUrlLogin = "http://localhost:8080/Back_End_war/";

$("#signInbtn").on('click',function (){
    login();
});


function login() {
    let loginUserName = $("#userName").val();
    let loginPassword = $("#password").val();

    $.ajax({
        url: baseUrlLogin + "signInForm",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            for (var login of res.data) {
                if ( loginUserName === login.userName && loginPassword === login.password) {
                    if (loginUserName === "Driver" && loginPassword === driverId) {
                        $.ajax({
                            url: baseUrlLogin + "loginForm/?username=" + loginUserName + "&password=" + loginPassword,
                            data:res.data,
                            method:"get",
                            success:function (res1) {
                            }
                        })
                        window.location.href = 'driverDashboard.html';
                    } else if (loginUserName === login.userName && loginPassword === login.password) {
                        $.ajax({
                            url: baseUrlLogin + "loginForm/?username=" + loginUserName + "&password=" + loginPassword,
                            data:res.data,
                            method:"get",
                            success:function (res1) {
                            }
                        });
                        window.location.href = 'reg_UserDashboard.html';


                    } else if (loginUserName === "admin"  && loginPassword === "1234") {
                        window.location.href = 'adminDashboard.html';
                    }
                    return;
                }
            }

        }
    });
}