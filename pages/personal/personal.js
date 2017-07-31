Page({
  data: {
    title: '你决定去哪，和谁去，何时去。\n我们帮您安排好一切。',
    destination: '',
    beginDate: '',
    endDate: '',
    adult: '',
    children: '',
    phone: '',
    remark: '',
    loading: false,
    btnHidden: false,
    messageHidden: true
  },
  beginDateChange: function(e) {
    this.setData({
      beginDate: e.detail.value
    })
  },
  endDateChange: function (e) {
    this.setData({
      endDate: e.detail.value
    })
  },
  destinationInput: function(e) {
    this.setData({
      destination: e.detail.value
    })
  },
  adultInput: function (e) {
    this.setData({
      adult: e.detail.value
    })
  },
  childrenInput: function (e) {
    this.setData({
      children: e.detail.value
    })
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  validate: function(){
    if (this.data.destination == '') {
      wx.showToast({
        title: '请输入目的地',
        image: '/images/warn.png',
        mask: true
      });
      return;
    } else {
      if (this.data.beginDate == '') {
        wx.showToast({
          title: '请输入出发日期',
          image: '/images/warn.png',
          mask: true
        });
        return;
      } else {
        if (this.data.endDate == '') {
          wx.showToast({
            title: '请输入结束日期',
            image: '/images/warn.png',
            mask: true
          });
          return;
        }else {
          if (this.data.adult == '') {
            wx.showToast({
              title: '请成人出行人数',
              image: '/images/warn.png',
              mask: true
            });
            return;
          } else {
            if (this.data.children == '') {
              wx.showToast({
                title: '请输入儿童出行人数',
                image: '/images/warn.png',
                mask: true
              });
              return;
            } else {
              if (this.data.phone == '') {
                wx.showToast({
                  title: '请输入联系电话',
                  image: '/images/warn.png',
                  mask: true
                });
                return;
              } else {
                wx.showToast({
                  title: '预定成功',
                  icon: 'success',
                  mask: true
                });
              };
            };
          };
        };
      };
    };
  }
})
