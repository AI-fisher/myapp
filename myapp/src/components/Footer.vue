<template>
    <footer class="footer">
        <ul>
            <router-link to="/home" tag="li">
                <span class="iconfont icon-shouyeshouye"></span>
                <p>首页</p>
            </router-link>
            <router-link to="/store" tag="li">
                <span class="iconfont icon-weishangchen"></span>
                <p>商城</p>
            </router-link>
            <router-link to="/add" tag="li">
                <h1 class="iconfont icon-jia"></h1>
            </router-link>
            <router-link to="/info" tag="li">
                <span class="iconfont icon-xiaoxi"></span>
                <p>消息</p>
            </router-link>
            <router-link to="/user" tag="li">
                <span class="iconfont icon-wode"></span>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>