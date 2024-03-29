export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'ANG-奇迹',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://localhost:9090',
    pro: 'https://produce.com'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'index',

  /**
   * @description 后台默认打开的路由name值
   */
  adminHomeName: 'admin-home-index',
  /**
   * @description 需要加载的插件
   */
  plugin: {

  }
}
