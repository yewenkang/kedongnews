// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    menudata:
      {
      imgUrls: [
        {
          'imgpath': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'url': '../index/index', 'title': '政府发表重要讲话'
        },
        { 'imgpath': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'url': '', 'title': '克东首家麻辣香锅上线吃货快来' },
        { 'imgpath': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'url': '', 'title': '电商发展势在必行，快来加入吧阿斯蒂芬阿斯蒂芬发送到分阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬法师发送到发的分萨德' }
      ],
        'menu': [{ 'title': '政府之声', 'imgpath': '../image/3.png' }, { 'title': '社会新闻', 'imgpath': '../image/4.png' },{ 'title': '吃货专区', 'imgpath': '../image/7.png' },
          { 'title': '交友天地', 'imgpath': '../image/提.png' },
          { 'title': '招聘专区', 'imgpath': '../image/玉米.png' },
          { 'title': '交易大厅', 'imgpath': '../image/稻.png' },
          { 'title': '笑话大全', 'imgpath': '../image/绣.png' },
          { 'title': '大事小事', 'imgpath': '../image/莓.png' }],
        'news': [{ 'title': '政府之声', 'news': [{ 'imgpath': '../image/3.png', 'info': '特朗普将到访菲律宾', 'user': '克东政府', 'date': '1小时前', 'comment': '123', 'class': '头条' }, { 'imgpath': '../image/4.png', 'info': '特朗普将到访菲律宾', 'user': '克东政府', 'date': '1小时前', 'comment': '123', 'class': '头条' }] },
        { 'title': '社会新闻', 'news': [{ 'imgpath': '../image/4.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '克东日报', 'date': '1小时前', 'comment': '123', 'class': '推荐' }, { 'imgpath': '../image/4.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '克东日报', 'date': '1小时前', 'comment': '123', 'class': '推荐' }] },
        { 'title': '吃货专区', 'news': [{ 'imgpath': '../image/7.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '北京晚报', 'date': '1小时前', 'comment': '123', 'class': '热点' }, { 'imgpath': '../image/7.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '北京晚报', 'date': '1小时前', 'comment': '123', 'class': '热点' }, { 'imgpath': '../image/7.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '北京晚报', 'date': '1小时前', 'comment': '123', 'class': '热点' }, { 'imgpath': '../image/7.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '北京晚报', 'date': '1小时前', 'comment': '123', 'class': '热点' }, { 'imgpath': '../image/7.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '北京晚报', 'date': '1小时前', 'comment': '123', 'class': '热点' }] },
        { 'title': '交友天地', 'news': [{ 'imgpath': '../image/提.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '天王盖地虎', 'date': '1小时前', 'comment': '123', 'class': '热搜' }, { 'imgpath': '../image/提.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '天王盖地虎', 'date': '1小时前', 'comment': '123', 'class': '热搜' }] },
        { 'title': '招聘专区', 'news': [{ 'imgpath': '../image/稻.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '小鸡炖蘑菇', 'date': '1小时前', 'comment': '123', 'class': '头条' }, { 'imgpath': '../image/稻.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '小鸡炖蘑菇', 'date': '1小时前', 'comment': '123', 'class': '头条' }]},
        { 'title': '交易大厅', 'news': [{ 'imgpath': '../image/莓.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '锄禾日当午', 'date': '1小时前', 'comment': '123', 'class': '头条' }]},
        { 'title': '笑话大全', 'news': [{ 'imgpath': '../image/绣.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '一只小仙女', 'date': '1小时前', 'comment': '123', 'class': '头条'}]},
        { 'title': '大事小事', 'news': [{ 'imgpath': '../image/玉米.png', 'info': '特朗普将到访菲律宾 当地民众焚烧美国旗抗议', 'user': '偷看洗澡的牛郎', 'date': '1小时前', 'comment': '123', 'class': '头条' }]}
        ]
      }
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