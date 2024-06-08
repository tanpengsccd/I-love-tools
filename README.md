# I-love-tools
我爱工具箱来自MJJ https://hostloc.com/thread-1212280-1-1.html

# 原介绍
对这个工具网源码进行了一些优化：https://hostloc.com/thread-1210866-1-1.html

主要修改内容有：
1、后台改为账号密码登录，上传即用，不需要再改源码配置。
2、删除无用的文件，减少源码包体积
3、修复了部分失效的工具，比如ICP查询等


演示地址：http://www.66zan.cn/

源码下载：https://wwi.lanzoub.com/iLnnt1aefbcj


安装方法：
1、PHP版本需>=7.0，<=7.4，伪静态规则使用ThinkPHP
2、运行目录（绑定目录）改成public
3、上传后直接可以使用
4、后台地址/admin，默认后台账号密码：admin/123456

# 1panel 部署(手把手)
0. 运行环境
   ![picture 7](https://i.imgur.com/5WtE4bU.png)  

1. 新建站点
   ![picture 8](https://i.imgur.com/6R3JM8a.png)  

2. 上传源码(本仓库下载zip 并解压)
进入站点目录下的index
![picture 10](https://i.imgur.com/09c5xlU.png)  

![picture 9](https://i.imgur.com/tjyv9H1.png)  

注意目录下的文件
![picture 5](https://i.imgur.com/633jOhQ.png)  

1. 修改运行目录
![picture 11](https://i.imgur.com/qUxRhyU.png)  

2. 登陆 `http://你的域名/admin` 默认账号密码 `admin/123456` 修改密码


> 如果开了WAF，需要关闭以下规则
![picture 1](https://i.imgur.com/IMQsZa8.png)  

# 当然也可用宝塔或者bt 那就自己研究了.