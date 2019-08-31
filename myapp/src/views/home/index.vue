<template>
    <div class="container">
        <header class="header">
            <ul class="choice">
                <li>关注</li>
                <li>发现</li>
                <li>附近</li>
            </ul>
        </header>
        <section class="content">
            <div class="input">
                <span class="iconfont icon-fangdajing"></span>
                <input type="text" placeholder="大家都在搜“玩转万圣节派对">
            </div>
            <ul class="list">
                <li>
                    <img src="http://img95.699pic.com/photo/50099/9722.jpg_wh300.jpg" class="show"/>
                    <h4>今日穿搭。很oversize</h4>
                    <div class="content-b">
                        <div class="content-b-l"><img src="./../../../public/img/head.png"/></div>
                        <div class="content-b-r">
                            <span>收藏</span>
                            <span>评论</span>
                            <span>点赞</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="http://img95.699pic.com/photo/50099/9722.jpg_wh300.jpg" class="show"/>
                    <h4>今日穿搭。很oversize</h4>
                    <div class="content-b">
                        <div class="content-b-l"><img src="./../../../public/img/head.png"/></div>
                        <div class="content-b-r">
                            <span>收藏</span>
                            <span>评论</span>
                            <span>点赞</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="http://img95.699pic.com/photo/50099/9722.jpg_wh300.jpg" class="show"/>
                    <h4>今日穿搭。很oversize</h4>
                    <div class="content-b">
                        <div class="content-b-l"><img src="./../../../public/img/head.png"/></div>
                        <div class="content-b-r">
                            <span>收藏</span>
                            <span>评论</span>
                            <span>点赞</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="http://img95.699pic.com/photo/50099/9722.jpg_wh300.jpg" class="show"/>
                    <h4>今日穿搭。很oversize</h4>
                    <div class="content-b">
                        <div class="content-b-l"><img src="./../../../public/img/head.png"/></div>
                        <div class="content-b-r">
                            <span>收藏</span>
                            <span>评论</span>
                            <span>点赞</span>
                        </div>
                    </div>
                </li>

            </ul>

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '@/lib/reset.scss';
    .container{
        @include flexbox();
        @include flex-direction(column);
        @include flex();
        @include rect(100%, auto);
        .header{
            @include rect(100%, 0.45rem);
            @include background-color(rgba(248, 248, 248, 1));
            .choice {
                @include rect(100%, 0.45rem);
                @include flexbox();
                @include justify-content(center);
                li {
                    @include margin(0.12rem);
                    @include font-size(0.16rem);
                }
            }
        }
        .content{
            @include flex();
            @include rect(100%, 100%);
            @include flexbox();
            @include flex-direction(column);
            @include overflow(auto);
            .input {
                @include rect(100%, 0.29rem);
                @include flexbox();
                @include justify-content(center);
                margin-top: 0.1rem;
                input {
                    @include rect(3.33rem, 0.29rem);
                    @include background-color(rgba(248, 248, 248, 1));
                    @include border-radius(0.05rem);
                    border: 0;
                }
            }
            .list {
                @include flexbox();
                @include flex-direction(column);
                @include justify-content(center);
                li {
                    @include flexbox();
                    @include flex-direction(column);
                    @include rect(100%, auto);
                    @include box-sizing(border-box);
                    padding: 0.29rem 0.1rem 0.08rem 0.1rem;
                    border-bottom: 1px solid rgba(187, 187, 187, 1);
                    .show {
                        @include rect(3.93rem, 2.3rem);
                    }
                    h4 {
                        margin: 0.2rem 0 0.09rem 0.28rem;
                        @include color(rgba(140, 140, 140, 1));
                    }
                    .content-b {
                        @include flexbox();
                        @include justify-content(space-between);
                        padding-right: 0.23rem;
                        .content-b-l {
                            img {
                                margin-left: .28rem;
                                @include rect(.44rem, .44rem);
                                @include border-radius(50%);
                            }
                        }
                        .content-b-r {
                            @include flexbox();
                            @include align-items(center);
                            span {
                                @include display(block);
                                @include rect(0.41rem, 0.3rem);
                                @include font-size(0.14rem);
                                @include line-height(0.3rem);
                                @include text-align(center);
                                @include color(rgba(140, 140, 140, 1));
                                @include background-color(rgba(248, 248, 248, 1));
                                &:nth-child(2) {
                                    margin: 0 0.1rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
