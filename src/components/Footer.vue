<template>
    <footer>
        <div class="foot-container">
            <div v-for="(item,index) in footList" :key="index" class="foot-left">
                <h2>{{ item.title }}</h2>
                <ul>
                    <li v-for="(sub_item,index) in item.subList" :key="index">
                        <router-link :to="sub_item.link">{{ sub_item.sub_title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="foot-middle">
                <h2>お問い合わせ</h2>
                <ul>
                    <li style="color: #FF8724;">
                        <span style="float:left;margin-right: 8px;"><i class="el-icon-location-outline"></i></span>
                        <div style="display: inline-block;">
                            OOOOOOOOO<br>OOOOOOOOO
                        </div>
                    </li>
                    <li style="color: #67C23A;"><i class="el-icon-phone"></i>電話番号：000-0000-0000</li>
                    <li style="color: #009688;"><i class="el-icon-printer"></i>ファックス：0000-0000000</li>
                </ul>
            </div>
            <div class="foot-right">
                <h2>写真</h2>
                <ul>
                    <li v-for="(item,index) in viewList" :key="index">
                        <router-link :to="item.link"><img :src="'../../static/img/foot-view/'+item.path" /></router-link>
                    </li>
                </ul>
                <h5><router-link to="">View More >></router-link></h5>
            </div>
        </div>
        <div class="foot-bottom">
            <div>© Copyrights 2018 OOOO会社. All rights reserved </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
        footList: [
            {
                title: '製品',
                subList:[
                    {
                        sub_title: 'OO製品',
                        link: ''
                    },
                    {
                        sub_title: 'OO製品',
                        link: ''
                    },
                    {
                        sub_title: 'OO製品',
                        link: ''
                    }
                ]
            },
            {
                title: '技术サプート',
                subList:[
                    {
                        sub_title: 'OOOOOO',
                        link: ''
                    },
                    {
                        sub_title: 'OOOOOOO',
                        link: ''
                    },
                    {
                        sub_title: 'OOOOOO',
                        link: ''
                    },
                    {
                        sub_title: 'OOOOOO',
                        link: ''
                    }
                ]
            },
            {
                title: '企業情報',
                subList: [
                    {
                        sub_title: '会社概要',
                        link: ''
                    }
                ]
            }
        ],
        viewList: [
            {
                path: 'flickr01.jpg',
                link: ''
            },
            {
                path: 'flickr02.jpg',
                link: ''
            },
            {
                path: 'flickr03.jpg',
                link: ''
            },
            {
                path: 'flickr04.jpg',
                link: ''
            },
            {
                path: 'flickr05.jpg',
                link: ''
            },
            {
                path: 'flickr06.jpg',
                link: ''
            },
            {
                path: 'flickr07.jpg',
                link: ''
            },
            {
                path: 'flickr08.jpg',
                link: ''
            }
        ]
    }
  }
};
</script>

<style lang="scss" scoped>
    footer {
        width: 100%;
        .foot-container {
            z-index: 1;
            background: #343434;
            width: 100%;
            padding: 3% 7%;
            box-sizing: border-box;
            display: flex;
            h2 {
                color: #fff;
                margin: 0 0 20px 0;
                font-size: 16px;
                font-family: "Open Sans", sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            ul {
                li {
                    padding: 5px;
                    padding-left: 0;
                    padding-right: 0;
                    color: #969595;
                    font-size: 14px;
                }
            }
            .foot-left {
                margin-right: 5%;
                ul {
                    li {
                        padding: 10px;
                        border-top: 1px solid #3F3F3F;
                        a {
                            display: block;
                            color: #969595;
                            font-size: 14px;
                            text-decoration: none;
                            transition: all .3s;
                            &:hover {
                                color:#FF8724;
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }
            .foot-middle {
                margin-left: 3%;
                position: relative;
                text-align: left;
                &::before {
                    position: absolute;
                    content: '';
                    height: 80%;
                    width: 1px;
                    background-color: #3F3F3F;
                    left: -30px;
                    top: 10%;
                }
                ul>li>i{
                    margin-right: 8px;
                }
            }
            .foot-right {
                text-align: left;
                margin-left: 5%;
                ul {
                    display: grid;
                    grid-template-columns: repeat(4, 25%);
                    grid-template-rows: repeat(2, 42%);
                    gap: 3px;
                    li:hover {
                        animation: pulse .5s linear;
                    }
                }
                h5 {
                    text-align: right;
                    a {
                    color: #5FB878;
                        text-decoration: none;
                    }
                }
            }
        }
        .foot-bottom {
            background: #2F2F2F;
            padding: 15px 0;
            box-sizing: border-box;
            width: 100%;
            color: #969595;
            font-size: 14px;
            display: flex;
            justify-content: space-around;
        }
    }

</style>
