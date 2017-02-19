<style scoped>
    .header {
        height: 55px;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .footer {}
    
    .main {}
    
    .githubLink {}
</style>
<template>
    <div>
        <header class="header">
            <a class="githubLink" href="https://github.com/towangle">
                <span>
                    <icon name="github" scale="2"></icon>
               </span>
                <span class="githubName">迷の微笑</span>
            </a>
            <nav>
                <router-link to="/">首页</router-link>
                <router-link to="/about">关于</router-link>
            </nav>
        </header>
        <main class="main">
            main
        </main>
        <footer class="footer">底部</footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }

</script>