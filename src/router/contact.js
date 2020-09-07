/*
 * @Description: '关于我们'页面所有路由
 * @Author: 任录
 * @Date: 2019-07-22 16:50:00
 * @LastEditTime: 2019-07-25 10:11:51
*/

export default [
    {
        path: 'contact',
        component: resolve => require(['@/views/contact'], resolve),
        name: 'Contact',
        meta: {
            nav: '問い合わせ'
        }
    }
      
]