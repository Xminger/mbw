## ts 部分说明
> *.d.ts类型文件不需要手动引入，TypeScript会自动加载

### 引入部分第三方库的时候需要额外声明文件

1. 比如说我想引入vue-lazyload,虽然已经在本地安装，但是typescript还是提示找不到模块。原因是typescript是从node_modules/@types目录下去找模块声明，有些库并没有提供typescript
的声明文件，所以就需要自己去添加
2. 解决办法：在src/typings目前下建一个tools.d.ts文件，声明这个模块即可

```
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'
```
