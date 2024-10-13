# vue-prefetch-router-link


## Usage

### 1. 进入某页面后自动加载
```html
<template>
  <nav class="nav">

    <PrefetchRouterLink 
    :to="{ name: 'about' }" 
    prefetchName="dashboard"
    >
    About[dashboard]
    </PrefetchRouterLink>

    <PrefetchRouterLink 
    to="/admin" 
    prefetchName="panel"
    >
    Admin[panel]
    </PrefetchRouterLink>

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
表示为：导航到`/admin`页面后，预加载`name:panel`的路由。

### 2. 手动启动预加载
```html
<PrefetchRouterLink 
:to="{ name: 'about' }" 
:prefetchName="name" 
:teleEnabled="true"
>
About[dashboard]
</PrefetchRouterLink>
```
设置`:teleEnabled="true"`。

手动启动预加载。
```vue
<script setup>
const tele = useTele()
function mockEvent() {
    tele.setTele(true); // 触发预加载
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