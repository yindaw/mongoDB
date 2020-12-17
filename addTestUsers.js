const { User } = require("./models");

function random (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function add () {
    var users = [];
    for (var i = 0; i < 100000; i++) {
        users.push({
            loginId: "user_" + i,
            loginPwd: "5ed093872e3da2b654983476",
            age: random(10, 50),
            name: "test",
            address: {
                province: "黑龙江",
                city: "哈尔滨"
            }
        })
    }
    console.log("构造数据完成");
    await User.insertMany(users);
    console.log("添加数据完成");
}
add();