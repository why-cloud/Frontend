<template>
    <div class="product">
        <figure>
            <figcaption>
                <h1>Contact Us</h1><br>
                <ul style="color: #ffffff;padding-left:100px;font-size:30px;">
                    <li><i class="el-icon-location-outline"></i>XX市XX区悦海新天地<br>XX号办公楼XX号</li>
                    <li><i class="el-icon-phone"></i>服务热线：000-000 0000</li>
                    <li><i class="el-icon-printer"></i>传真：00000000</li>
                    <li><i class="el-icon-message"></i>LINE：00000000</li>
                </ul>
                
            </figcaption>
            <img src="../../../static/img/head-view/contact.jpg" width="100%" height="760px">
        </figure>
        <!-- <ul class="category" :class="{fix: fix}">
            <li v-for="(item,index) in category" :key="index">
                <div class="outcircle" :style="{backgroundColor: item.color}" @click="selected(item)">
                    {{ item.title }}
                    <div class="incircle" :class="{active: active == item.title}"></div>
                </div>
            </li>
        </ul> -->
        
    </div>
</template>
<script>
export default {
    // name: 'product',
    data(){
        return {
           
        }
    },
    mounted(){
        // this.copy_products = JSON.parse(JSON.stringify(this.products));
        // this.$emit('headFix', ['absolute',true]);
        // window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
        // selected(item){
        //     this.active = item.title;
        //     if(item.kind == 0){
        //         this.products = this.copy_products;
        //     }else {
        //         this.products = this.copy_products.filter(it=>it.kind===item.kind);
        //     }
        // },
        // handleScroll(){
        //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     if(scrollTop >= 555){
        //         this.fix = true;
        //     }else {
        //         this.fix = false;
        //     }
        // }
    }
  
}
</script>
<style lang="scss" scoped>
    .product {
        figure {
            figcaption {
                color: #ffffff;
                text-align: left;
                position: absolute;
                left: 6%;
                top: 30%;
                h1 {
                    font-size: 2.5rem;
                }
            }
        }
        .fix {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            z-index: 2;
        }
        .category {
            height: 15vh;
            padding: 1% 25% 0;
            display: grid;
            grid-template-columns: repeat(4, 25%);
            background-color: rgba(0,0,0,.5);      // #393D49;
            margin-top: -1%;
            li {
                position: relative;
                .outcircle {
                    width: 50%;
                    height: 80%;
                    border-radius: 50%;
                    color: #ffffff;
                    line-height: 12vh;
                    position: relative;
                    cursor: pointer;
                    transition: all .5s;
                    &:hover {
                        width: 60%;
                        height: 100%;
                        line-height: 15vh;
                        font-size: 18px;
                    }
                    .incircle {
                        width: 80%;
                        height: 80%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        border-radius: 50%;
                        margin: auto;
                        border: 0px solid transparent;
                        &.active {
                            color: rgba(255,255,255,.4);
                            border: 3px solid rgba(255,255,255,.4);
                            animation: self-zoomIn .5s linear;
                        }
                    }
                }
                
            }

        }
        .products>span{
            margin: 15vh auto;
            width: 80%;
            display: grid;
            grid-template-columns: repeat(3, 33.33333%);
            row-gap: 3%;
            li {
                position: relative;
                overflow: hidden;
                img {
                    transition: all .5s ease-out;
                }
                &:hover img {
                    opacity: 0.8;
                }
                &:hover .inner-text{
                    visibility: visible;
                    top: 78.5%;
                }
                .inner-text {
                    position: absolute;
                    left: 50%;
                    right: 10%;
                    top: 100%;
                    transform: translateX(-50%);
                    background: transparent;
                    height: 20%;
                    width: 250px;
                    background-color: rgba(0,0,0,.5);
                    color: #ffffff;
                    visibility: hidden;
                    transition: all .5s ease-out;
                    h4 {
                        margin-top: 5%;
                    }
                }
            } 
        }
    }
// 动画
@keyframes self-zoomIn {
  from {
    border: 0px solid transparent;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    border: 3px solid #ffffff;
  }

  80% {
    border: 3px solid #ffffff;
  }

  100% {
    border: 3px solid rgba(255,255,255,.4);
  }
}
</style>

