var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({
  onLoad: function (options) {
    //请求文章内容
    var that = this;
    this.setData({
      articleId: options.id
    });    
    var introduction = "< p style= 'font-family:sans-serif;font-size:16px;background-color:#FFFFFF;' > <span style='font-size:12px;color:#666666;'> 如果你看过《鲁宾逊漂流记》或者电影《荒岛余生》，肯定会被主人公的坚毅、顽强、生存能力所感动与佩服。</span></p> <p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;' > <br /></p> <p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;' > <span style='font-size:12px;color:#666666;' > 那么如果是你，万一漂流到一个无人的荒岛中，你是否能够顽强地生存下来，你是否具备足够的知识和经验，能够找到生存四大物资（淡水、火、庇护所、食物），是否知道在荒岛里受伤了应该采取怎样的急救措施，如何发送求救信号？你的意志力，求生欲望是否真能让你活下去？</span></p> <p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;' > <span style='font-size:12px;' > <br /></span> </p><p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;'> <span style='font-size:12px;color:#666666;'>本次活动为野外特种训练营海岛生存的初级课程，在教学海岛生存知识同时，磨砺心智，野蛮体魄，给你一次难忘又有意义的生存之旅。</span> </p><p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;'> <br /> </p><p>  <img src='http:// static2.ivwen.com / users / 6076270 / 4a41f...e = 'color:#666666;font-size:12px;' > 15 - 18人< /span><br / > <span style='color:#666666;font-size:12px;' > </span><br /> </span></p> <p><span style='font-size:12px;color:#666666;' > <span style='color:#666666;font-size:12px;' > </span></span> </p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'> 【往期活动照片】</p> <p><img src='http://static2.ivwen.com/users/6076270/8193967c7eb24a2dad5dbf0f719c4de3.jpg-mobile' alt= '' /></p><p>  <br /> </p><p>  <img src='http:// static2.ivwen.com / users / 6076270 / b07efc9748ac45e39d02d74d03872e04.jpg - mobile' alt='' /></p><p> <img src='http://static2.ivwen.com/users/6076270/5293489103c84f60962fa796fa5c59c4.jpg-mobile' alt='' /></p><p>  <img src='http://static2.ivwen.com/users/6076270/1225ece71da74cb4b23ef168309e1386.jpg-mobile' alt='' /></p><p>  <img src='http://static2.ivwen.com/users/6076270/c4adc548327c4279a30ece0b9cc64321.jpg-mobile' alt='' /></p><p>  <br /></p><p> <br /></p>";
    var trip = "<p style='font-family:sans-serif; font - size:16px; background - color:#FFFFFF; '> <p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>   <span style='font- size:12px; color: #666666; '>【具体安排】</span> </p> <p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>   <span style='font- size:12px; color: #666666; '>Day1:</span>  </p> <p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>   <span style='font- size:12px; color: #666666; '>06:30  越秀公园地铁站集合；自驾的从各地出发。</span> </p> <p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>   <span style='font- size:12px; color: #666666; '>07:00  乘坐专车出发；</span> </p> <p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>   <...16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;' > <span style='font-size:12px;color:#666666;' > 17:00   坐船离岛；</span>  </p> <p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;' > <span style='font-size:12px;color:#666666;' > 17:30   到达岸边，餐厅晚饭。</span>  </p> <p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;' > <span style='font-size:12px;color:#666666;' > 18:30   坐专车回广州，其他自驾的自驾回中山、深圳。</span> </p> <div style='margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;' > <span style='font-size:12px;color:#666666;' > 22:00   回到广州。</span>  </div> <span style='font-size:12px;color:#666666;' > </span></p> <p style='font-family:sans-serif;font-size:16px;background-color:#FFFFFF;' > <span style='font-size:12px;color:#666666;' > <br /></span> </p>";
    var expense = "'<p style='font-size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '> <span style='font- size:12px; color: #666666; '>【活动费用】</span></p><p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '> <span style='font- size:12px; color: #666666; '>400元/人，大小同价。</span></p><p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '> <span style='font- size:12px; color: #666666; '>含车费、船费、教练及领队费用、物资损耗、药品消耗费、活动组织费、保险费（购买10万人身意外保险）。</span></p><p>  <span style='font- size:12px; color: #666666; '><br /></span></p><p style='font- size:16px; font - weight:normal; color: #18629C; font - family:&quot; text - align:justify; background - color:#59D7F6; '>  <span style='font- size:12px; color: #666666; '>自驾250元/人。</span></p><p>  <span style='font- size:12px; color: #666666; '><br /></span></p><p style='font- size:16px; font - weight:normal; color: #1...</p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'> <br / > </p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>【退款说明】</span> </p><p style='color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>活动开始前四天退出，退全款；而截止报名（即前三天）后第一天临时退出退还已交费用的90%，第二天退还85%，第三天退还80%。</span> </p><p style='color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'> <span style='font-size:12px;color:#666666;'><br /> </span></p> <p style='color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;' > <span style='font-size:12px;color:#666666;' > <img src='http://static2.ivwen.com/users/6076270/b41a0abf4ba241b8bf90cc175e28b65a.jpg-mobile' alt= ' /><br /></span> </p>'";
    var book = "'<p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>【领队及教练】</span></p><div style='margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'> <span style='font-size:12px;color:#666666;'>甄宇聪（沙蝎）</span></div><div style='margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>√  野外特种训练营创始人、总教练；</span></div><div style='margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'> <span style='font-size:12px;color:#666666;'>√  国际野外医学协会高级野外急救员，WAFA持证；</span></div><div style='margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;'> <span style='font-size:12px;color:#666666;'>√  中国红十字会救护员；</sp...ont-size:12px;color:#666666;'>【副队、报名咨询联系】</span></p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>药哥</span></p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'> <span style='font-size:12px;color:#666666;'>√  qq:576517900</span></p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>√  电话:15899955954</span></p><p style='font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;'>  <span style='font-size:12px;color:#666666;'>√  微信:</span></p><span style='font-size:12px;color:#666666;'><img src='http://static2.ivwen.com/users/6076270/b2333f3759a94b7fac9e63d8028bc7dc.jpg-mobile' alt=' /></span><p> <br /></p>'";
    WxParse.wxParse('introduction', 'html', introduction, that, 5);
    WxParse.wxParse('trip', 'html', trip, that, 5);
    WxParse.wxParse('expense', 'html', expense, that, 5);
    WxParse.wxParse('book', 'html', book, that, 5);
  },
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    article: {
      coverImg: [
        'http://a2.att.hudong.com/77/41/16300000026741124566411126218.jpg',
        'http://kobe.travel.coocan.jp/photo/nakaharima/tonomine_kougen/tonomine_004.jpg',
        'http://picture.51auto.com/info/Info20090923154101.jpg',
        'http://static2.ivwen.com/users/6076270/b77b09983c6043548a0427215c2f1d02.jpg-mobile',
        'http://static2.ivwen.com/users/6076270/56913c61dcaa407f99b239c4e3657833.jpg-mobile'
      ],
      title: '荒野求生，无人区体验生存极限之旅',
      price: '1440',
      theme: ['荒野求生','野外生火','寻找水源','搭建庇护所','模拟求救','风景秀丽','日天','求生'],
      assemblyPlace: '广州越秀公园',
      destination: '深圳鬼湾',
      days:'2017/8/5~2017/8/6',
      introduction: "<h2>如果你看过《鲁宾逊漂流记》或者电影《荒岛余生》，肯定会被主人公的坚毅、顽强、生存能力所感动与佩服。</h2><h2><br></h2><h2>那么如果是你，万一漂流到一个无人的荒岛中，你是否能够顽强地生存下来，你是否具备足够的知识和经验，能够找到生存四大物资（淡水、火、庇护所、食物），是否知道在荒岛里受伤了应该采取怎样的急救措施，如何发送求救信号？你的意志力，求生欲望是否真能让你活下去？</h2><h2><br></h2><h2>本次活动为野外特种训练营海岛生存的初级课程，在教学海岛生存知识同时，磨砺心智，野蛮体魄，给你一次难忘又有意义的生存之旅。</h2><h2><img src='http://static2.ivwen.com/users/6076270/4a41f7c7f79f41bdb3fde3be020e5380.jpg-mobile'></h2><h2>先来欣赏一下我们的海岛美照吧，那里的水能见度很高，带上泳镜潜水，能够看到很多小鱼，沙滩较缓，海浪也小，适合戏水玩耍。</h2><h2><img src='http://static2.ivwen.com/users/6076270/3ec8f8ae23fb447d9b636ecf04ca9470.jpg-mobile'></h2><h2><br></h2><h2>【地点介绍】</h2><h2>广东省惠州市某荒岛，海产是广东省海岛最丰富的，岛上有信号，有时可上网，但无人工建筑，尚未开发，只有一对老夫妇看守，岛上可洗淡水澡，但不能洗菜与饮用。</h2><h2><br></h2><h3>【活动主题】</h3><h3>一、磨砺心智:体验、调整、适应野外环境。</h3><h3>二、海岛生存:掌握基本的海岛生存知识，为以后的海岛活动与突发事件做准备。</h3><h3>三、欢度假期:拍摄美丽的照片，留存感人的记忆，欢享最high的假日。</h3><p><img src='http://static2.ivwen.com/users/6076270/e557105dea184e2c96c66ec7a5f8aad7.jpg-mobile'></p><p><br></p><p><br></p>",
      trip: "<h3>【具体安排】</h3><h3>Day1:</h3><h3>06:30  越秀公园地铁站集合；自驾的从各地出发。</h3><h3>07:00  乘坐专车出发；</h3><h3>9:30  到达码头，市场购买食材，饮料等，自己买点小吃简单吃饱，或者自带干粮解决午餐；</h3><h3>10:00  坐船出发登岛；</h3><h3>10:30  登岛，开始搭建天幕、帐篷、准备午餐  、休息；</h3><h3>14:00  在教练安排指导下，下海捕猎、游泳、玩水、拍照；</h3><h3>17:00  一部分人负责处理海鲜，另一部分猎人继续捕猎，为明天的早餐、午餐做准备；</h3><h3>18:30  全部上岸，野外用火及烹饪安全，食用海鲜大餐；</h3><h3>21:30  才艺表演，狼人杀，UNO……</h3><h3>22:30  进帐篷睡觉。</h3><h3><br></h3><h3>Day2:</h3><h3>06:00  起床洗漱；</h3><h3>07:00  合力完成丰盛的海鲜早餐；</h3><h3>08:30  实用性游泳技术教学，溺水表现及施救方法教学。不下水的人可以岸上拍摄；</h3><h3>09:30  上岸换洗，溺水心肺复苏，海岛活动常见伤的正确处理方法，海岛活动危险生物的规避；</h3><h3>10:30   准备丰盛海鲜午餐；</h3><h3>11:30   午餐时间，检查淡水收集装置；</h3><h3>12:30   吃午餐；</h3><h3>14:00   下海抓青口，花甲，海胆等带回家的海鲜。</h3><h3>16:00   收拾帐篷等。</h3><h3>17:00   坐船离岛；</h3><h3>17:30   到达岸边，餐厅晚饭。</h3><h3>18:30   坐专车回广州，其他自驾的自驾回中山、深圳。</h3><p>22:00   回到广州。</p><p><img src='http://static2.ivwen.com/users/6076270/935eb931dbc64635b5c36ac7332d4bef.jpg-mobile'></p><p><br></p>",
      expense: "<h3>【活动费用】</h3><h3>400元/人，大小同价。</h3><h3>含车费、船费、教练及领队费用、物资损耗、药品消耗费、活动组织费、保险费（购买10万人身意外保险）。</h3><h3><br></h3><h3>自驾250元/人。</h3><h3><br></h3><h3>【费用不含】</h3><h3>两天自购食材费用、桶装水费用（20元一桶）、第一天午餐费用、洗澡费用（一次15元）。</h3><h3><br></h3><h3>【退款说明】</h3><p>活动开始前四天退出，退全款；而截止报名（即前三天）后第一天临时退出退还已交费用的90%，第二天退还85%，第三天退还80%。</p><p><br></p><p><br></p>",
      book: "<h3>【领队及教练】</h3><p>     甄宇聪（沙蝎）</p><p>√  野外特种训练营创始人、总教练； </p><p>√  国际野外医学协会高级野外急救员，WAFA持证；</p><p>√  中国红十字会救护员；</p><p>√  国家游泳池救生员；</p><p>√  世界跆拳道联盟黑带一段，教练；</p><p>√  国际击跆道黑带、教练；</p><p>√  中野户外探索体验营地野外生存教练；</p><p>√  广州市登山协会K5领队。</p><p><br></p><p><img src='http://static2.ivwen.com/users/6076270/c5255532ca7e4a6aaf1e12d1b9007ec0.jpg-mobile'></p>",
      bookLoading: false
    },
    showId: 'introduction',
  },
  switchShowId: function(e) {
    this.setData({
      showId: e.target.id
    })
  },
  navFixed: function (e) {
    console.log(e);
  },
  onShareAppMessage: function (res) {
    return {
      title: '转发活动详情',
      path: '/pages/activity_detail/activity_detail',
      success: function (res) {
        wx.showToast({
          title: '转发成功',
          icon: 'success'
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '转发失败',
          image: '/images/warn.png'
        });
      }
    }
  },
  phonecall: function() {
    wx.makePhoneCall({
      phoneNumber: '15899955954'
    })
  },
  getUserInfo: function(e) {
    console.log(e);
    if (wx.showModal) {
      var userInfo = JSON.parse(e.detail.rawData);
      console.log(userInfo);
      if (e) {
        wx.showModal({
          title: '确认预定',
          content: 'hi！' + userInfo.nickName + '，确认预定此次旅途？',
          success: function (res) {
            if (res.confirm) {
              wx.showToast({
                title: '预订成功,稍后将有专人联系您',
                icon: 'success'
              });
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    } else {
      wx.showToast({
        title: '当前微信版本过低',
        image: '/images/warn.png'
      })
    }



  }
})
