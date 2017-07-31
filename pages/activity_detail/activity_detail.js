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
      days:'2017-07-28~2017-07-30',
      introduction:'<p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<span style="font-size:12px;color:#666666;">如果你看过《鲁宾逊漂流记》或者电影《荒岛余生》，肯定会被主人公的坚毅、顽强、生存能力所感动与佩服。</span></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<br /></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<span style="font-size:12px;color:#666666;">那么如果是你，万一漂流到一个无人的荒岛中，你是否能够顽强地生存下来，你是否具备足够的知识和经验，能够找到生存四大物资（淡水、火、庇护所、食物），是否知道在荒岛里受伤了应该采取怎样的急救措施，如何发送求救信号？你的意志力，求生欲望是否真能让你活下去？</span></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<span style="font-size:12px;"><br /></span></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<span style="font-size:12px;color:#666666;">本次活动为野外特种训练营海岛生存的初级课程，在教学海岛生存知识同时，磨砺心智，野蛮体魄，给你一次难忘又有意义的生存之旅。</span></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<br /></p><p>	<img src="http://static2.ivwen.com/users/6076270/4a41f...e="color:#666666;font-size:12px;">15-18人</span><br /><span style="color:#666666;font-size:12px;"></span><br /></span></p><p>	<span style="font-size:12px;color:#666666;"><span style="color:#666666;font-size:12px;"></span></span></p><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	【往期活动照片】</h3><p>	<img src="http://static2.ivwen.com/users/6076270/8193967c7eb24a2dad5dbf0f719c4de3.jpg-mobile" alt="" /></p><p>	<br /></p><p>	<img src="http://static2.ivwen.com/users/6076270/b07efc9748ac45e39d02d74d03872e04.jpg-mobile" alt="" /></p><p>	<img src="http://static2.ivwen.com/users/6076270/5293489103c84f60962fa796fa5c59c4.jpg-mobile" alt="" /></p><p>	<img src="http://static2.ivwen.com/users/6076270/1225ece71da74cb4b23ef168309e1386.jpg-mobile" alt="" /></p><p>	<img src="http://static2.ivwen.com/users/6076270/c4adc548327c4279a30ece0b9cc64321.jpg-mobile" alt="" /></p><p>	<br /></p><p>	<br /></p>',
      trip: '<p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">【具体安排】</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">Day1:</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">06:30  越秀公园地铁站集合；自驾的从各地出发。</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">07:00  乘坐专车出发；</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<...16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">17:00   坐船离岛；</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">17:30   到达岸边，餐厅晚饭。</span>	</h3>	<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">18:30   坐专车回广州，其他自驾的自驾回中山、深圳。</span>	</h3>	<div style="margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">		<span style="font-size:12px;color:#666666;">22:00   回到广州。</span>	</div><span style="font-size:12px;color:#666666;"></span></p><p style="font-family:sans-serif;font-size:16px;background-color:#FFFFFF;">	<span style="font-size:12px;color:#666666;"><br /></span></p>',
      expense: '<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">【活动费用】</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">400元/人，大小同价。</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">含车费、船费、教练及领队费用、物资损耗、药品消耗费、活动组织费、保险费（购买10万人身意外保险）。</span></h3><p>	<span style="font-size:12px;color:#666666;"><br /></span></p><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">自驾250元/人。</span></h3><p>	<span style="font-size:12px;color:#666666;"><br /></span></p><h3 style="font-size:16px;font-weight:normal;color:#1...</h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<br /></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">【退款说明】</span></h3><p style="color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">活动开始前四天退出，退全款；而截止报名（即前三天）后第一天临时退出退还已交费用的90%，第二天退还85%，第三天退还80%。</span></p><p style="color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;"><br /></span></p><p style="color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;"><img src="http://static2.ivwen.com/users/6076270/b41a0abf4ba241b8bf90cc175e28b65a.jpg-mobile" alt="" /><br /></span></p>',
      book: '<h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">【领队及教练】</span></h3><div style="margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">甄宇聪（沙蝎）</span></div><div style="margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  野外特种训练营创始人、总教练；</span></div><div style="margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  国际野外医学协会高级野外急救员，WAFA持证；</span></div><div style="margin:0px;padding:0px;color:#18629C;font-family:&quot;font-size:16px;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  中国红十字会救护员；</sp...ont-size:12px;color:#666666;">【副队、报名咨询联系】</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">药哥</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  qq:576517900</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  电话:15899955954</span></h3><h3 style="font-size:16px;font-weight:normal;color:#18629C;font-family:&quot;text-align:justify;background-color:#59D7F6;">	<span style="font-size:12px;color:#666666;">√  微信:</span></h3><span style="font-size:12px;color:#666666;"><img src="http://static2.ivwen.com/users/6076270/b2333f3759a94b7fac9e63d8028bc7dc.jpg-mobile" alt="" /></span><p>	<br /></p>',
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
