/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxff20ac4e10ef4502',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '85d71bbcaed28d6260e42a63d2fecb3b',

  PROVINCE: '辽宁',
  CITY: '大连',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU23376T1Z6kWu5YgHesZEPIlIc26CZH60Ibtduv',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'e3emmLAStEumVpzPTCljAlzygTWgdRRb_naDO2As-_s ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '08-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-15',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '11-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-03' },
        //考研倒计时
        { keyword: 'learn_day', date: '2023-12-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'sev6FXSgQuSkefljAbBKkXBwmgJESdnBTUuE9va8JWc',

  CALLBACK_USERS: [
    {
      name: '纨绔',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ob-3p5_Jl1vHIiSthWWLAHrCMuPI',
    }
  ],

}

module.exports = USER_CONFIG

