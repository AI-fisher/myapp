<template>
    <div id='app'>
        <div class="header">
            <button class="home">返回</button>
        </div>
        <div class="container">
            <h1>手机密码登录</h1>
            <div class="phonenum">
                <input type="text" value="输入手机号" class="phone">
                <input type='text' value="请输入密码" class="four">
            </div>
            <div class="sure">
                <button class="confirm">确定</button>
            </div>
            <div class="password">
                <p>验证码登录</p>
            </div>
        </div>
        <div class="footer">
            <div class="three">
                <p>第三方登录</p>
            </div>
            <ul class="talk">
                <li class="vx">微信</li>
                <li class="qq">QQ</li>
                <li class="wb">微博</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    @import '@/lib/reset.scss';
    html,body,#app{
        @include rect(100%,100%);
        #app{
            @include flexbox();
            @include flex-direction(column);
            .header{
                @include rect(100%,48px);
                //  @include flexbox();
                //  @include flex-direction(column);
                .home{
                    @include border(1px solid #ffff);
                    @include rect(80px,38px);
                    @include display(block);
                    @include background-color(#F4F4F4);
                    @include font-size(14px);
                    @include text-align(center);
                    @include margin(15px 0 20px 15px);
                    @include line-height(38px);
                    border:0;
                }
            }
            .container{
                @include flex();
                @include rect(100%,auto);
                @include flexbox();
                @include flex-direction(column);
                h1{
                    @include font-size(30px);
                    @include rect(100%,59px);
                    @include flexbox();
                    @include justify-content();
                    @include margin(15px 0 0 0)
                }
                .phonenum{
                    @include rect(100%,80px);
                    @include margin(0 0 22px 0);
                    .phone,.four{
                        @include rect(235px,40px);
                        @include display(block);
                        @include margin(0 auto);
                        border:none;
                        border-bottom:1px solid #888;
                    }
                }
                .sure{
                    @include rect(100%,40px);
                    .confirm{
                        @include display(block);
                        @include margin(0 auto);
                        @include rect(332px,40px);
                        @include background-color(#F4F4F4);
                        border:0;
                    }
                }
                .password{
                    @include rect(100%,auto);
                    p{
                        @include display(block);
                        @include rect(70px,20px);
                        @include margin(10px auto);
                    }
                }
            }
            .footer{
                @include rect(100%,108px);
                .three{
                    @include rect(100%,45px);
                    @include flexbox();
                    p{
                        @include margin(0 auto);
                    }
                }
                ul{
                    @include flexbox();
                    @include rect(100%,100%);
                    li{
                        @include flexbox();
                        @include flex();
                        @include flex-direction(column);
                        @include align-items();
                    }
                }
            }
        }
    }
</style>
