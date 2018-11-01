##  Tommy 自用 基于gulp搭建

### site: applerepair
#### 为repairtech 制作单页面宣传网站。附带邮件转发功能。

```$xslt
测试站：
aws： tommy2018 -- applerepair
ftp：applerepair
```

```$xslt
心得体会：
空项目雏形完善。对于sass运用有待加强。
配合php 实现邮件转发，部署测试服务器需要安装sendmail

```


## 项目启动
```
// 常用命令
开发环境： npm run dev
生产环境： npm run build //将配置文件端口改为80

// 单任务命令
执行压缩： gulp zip
编译页面： gulp html
编译脚本： gulp script
编译样式： gulp styles
语法检测： gulp eslint
压缩图片： gulp images
```


```
git clone https://github.com/vincentSea/gulp-cli.git
```

## 项目目录
```
├── README.md         # 项目说明
├── config            # gulp路径配置
├── dist              # 打包路径
|
├── gulpfile.js       # gulp配置文件
├── package.json      # 依赖包
|
├── src               # 项目文件夹
│   ├── include       # 公用页面引入
│   ├── index.html    # 首页
│   ├── static        # 资源文件夹
│   │   ├── images    # 图库
│   │   ├── js        # 脚本
│   │   └── styles    # 样式（scss, css）
│   └── views         # 页面
|
├── static            # 打包到dist中static文件中
└── webpack.config.js # webpack配置文件
```

## 项目约定
1、 使用严格的 eslint 规范 [文档链接](https://github.com/airbnb/javascript)
* 如果不想使用eslint，可以gulpfile文件中去掉该任务

2、使用scss预处理
* 可以根据个人喜好，去配置不同的预处理工具

3、static文件夹
* 一级目录中static文件夹，可以存放不需要编译的文件内容，比如一些插件，图片，字体文件等
* 每次npm run dev or build 都会把static文件夹下的内容，打包到dist/static里


## 代理模式
* config/index.js文件中配置

**例子如下**
``` javascript
 middleware: [
  proxy.proxyPrase(
    {
      target: 'http://v3.wufazhuce.com:8000/api',
      route: '/api'
    }
  )
]
```

## 使用Eslint 
config/index.js文件
```
useEslint: false // 是否启用eslint
```

## 使用webpack
* 集成webpack功能，可以自行选择

config/index.js文件
```
useWebpack: false // 是否启用webpack
```

## 总结
欢迎技术交流：tommywhy1989@gmail.com

应付老板的任务，不喜勿喷。




