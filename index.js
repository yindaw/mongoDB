const { User } = require("./models");

var obj = {
    loginId: "user11",
    loginPwd: "sdsfdgh",
    name: "邓哥",
    abc: 1,
    loves: ["秋葵", "香菜"],
    address: {
        province: "accc",
        city: "哈尔滨"
    }
};



// async function test () {
//     var u = new User(obj);
//     var result = await u.save();
//     console.log(result);
// }



async function test () {
    const result = await User.create(obj);
    //     validateBeforeSave: false
    // });
    // console.log(result);
    // User.validate(obj);
}
test();
