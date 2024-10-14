# vue-prefetch-router-link


## install

```bash
npm i vue-prefetch-router-link
```

## Usage

### 1. 进入某页面后自动加载
```html
<script setup>
  import { PrefetchRouterLink } from 'vue-prefetch-router-link'
</script>

<template>
  <nav class="nav">
    <!-- 接收RouterLink相同的参数，to为一个对象 -->
    <PrefetchRouterLink 
    :to="{ name: 'about' }" 
    prefetchName="dashboard"
    >
    About[dashboard]
    </PrefetchRouterLink>

    <!-- 接收RouterLink相同的参数，to为一个字符串 -->
    <PrefetchRouterLink 
    to="/admin" 
    prefetchName="panel"
    >
    Admin[panel]
    </PrefetchRouterLink>

    <!-- prefetchName可接收一个字符串数组 -->
    <PrefetchRouterLink 
    to="/father" 
    :prefetchName="['son1','son2']"
    >
    Father
    </PrefetchRouterLink>

  </nav>

  <RouterView />
</template>
```
prefetchName：接收一个字符串或字符串数组，表示为当进入`to`指代路由后预加载的路由的`name`。

```html
<PrefetchRouterLink 
to="/admin" 
prefetchName="panel" 
>
Admin[panel]
</PrefetchRouterLink>
```
表示为：导航到`/admin`页面后，自动加载`name`为`panel`的路由。

### 2. 手动启动预加载
```html
<template>

  <PrefetchRouterLink 
  :to="{ name: 'about' }" 
  prefetchName="dashboard" 
  :teleEnabled="true"
  >
  About[dashboard]
  </PrefetchRouterLink>

</template>
```
设置`:teleEnabled="true"`。

在`About.vue`中，通过某些事件手动启动预加载。
```vue
<script setup>
import { useTele } from 'vue-prefetch-router-link'
const tele = useTele()
function mockEvent() {
     tele.open(); // 触发预加载
}
</script>

<template>
    <div class="content">
        this is about page.
        <div class="hover" @mouseover="mockEvent">
            hover me!
        </div>
    </div>
</template>
```

## live demo
可以通过浏览器devtools查看效果。

[Live Demo](https://vue-prefetch-router-link.netlify.app)