var util = require('../../utils/util.js')
var config = require('../../config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //获取表单内容
  qingqiu:function(){
    wx.request({
      url: 'https://t4iwm697.qcloud.la/api/newsall',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  formSubmit:function(e){
    wx.getStorage({
      key: 'imgurl',
      success: function (res) {
        console.log(res.data)
        var imgurl = res.data
        // 上传图片
        wx.uploadFile({
          url: config.service.uploadUrl,
          filePath: imgurl, 
          name: 'file',
          formData: {
            'name': e.detail.value
          },
          success: function (res) {
            util.showSuccess('上传图片成功')
            res = JSON.parse(res.data)
            console.log(res)
          },

          fail: function (e) {
            util.showModel('上传图片失败')
          }
        })
      }
    })
    
    console.log(e.detail.value)
  },
  // 上传图片接口
  doUpload: function () {
    var that = this

    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // util.showBusy('正在上传')
        var filePath = res.tempFilePaths[0]
        wx.setStorage({
          key: "imgurl",
          data: filePath
        })
        that.setData({
          imgUrl: filePath
        })
      },
      fail: function (e) {
        console.error(e)
      }
    })
  },
  
 
  // 预览图片
  previewImg: function () {
    wx.previewImage({
      current: this.data.imgUrl,
      urls: [this.data.imgUrl]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})