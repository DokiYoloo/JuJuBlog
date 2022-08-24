---
icon: edit
date: 2022-08-22
---

# CareUEveryDay使用教程

#### Hello，大家好，最近我在Github发布了一个公众号推送天气和问候的项目，这里跟大家讲下如何使用

## 1.小白篇

将分为以下几个步骤 
:::info
1.注册一个Github账号  
2.下载源码  
3.注册微信公众平台测试应用  
4.修改配置文件  
5.如何免配置Java与Git环境发布代码到Github  
:::

#### 1.注册Github账号 

[点我跳转注册地址](https://github.com/signup)  
首先我们访问github的地址   https://github.com  可以看到右上角有一个 `Sign up`**点击即可进入注册页面**

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/1.png)

然后进入注册页后输入你的信息 `邮箱、密码、名称、人机识别`提交即可

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/3.png)

**到这里你就有一个属于自己的Github账号啦 注册成功后进行登录即可**


#### 2.下载源码

 [点我跳转Gitee源码页面](https://gitee.com/DokiYoloo/CareUEveryDay)  
 [点我跳转Github源码页面](https://github.com/DokiYoloo/CareUEveryDay)  

 **以上两个链接都可以下载 gitee是国内的仓库平台访问会快Github打不开可以选择Gitee**

源码页面是长这样的  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/4.png)

然后我们开始下载源码  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/5.png)

下载成功后将它解压到一个你找得到的地方  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/6.png)

**到这里就已经下载成功啦 我们后面留着用 先注册微信公众平台**


#### 3.注册微信公众平台测试应用  

[点我跳转注册页面](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)

注册页面是长这样的  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/7.png)  
我们点击登录 然后使用微信扫码就OK啦  

成功后我们会进入下面这个页面  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/8.png)  

图中红框内容一会咱们要用到，现在我们继续往下滑  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/9.png)  

滑到这个位置 我们可以看到一个二维码 让你的 女朋友/男朋友 扫一下列表就会出现用户啦 微信号这一列是我们后面要用到的

然后这一步结束 我们配置模板消息  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/10.png)  

**标题可以自己定，内容也可以根据自己的需要修改，内容我放到下面，博客带复制功能 大家可以一键复制**  

```txt
你叫{{friendName.DATA}}
今年{{howOld.DATA}}
距离下一次生日{{nextBirthday.DATA}}天
具体我们的下一次纪念日{{nextMemorialDay.DATA}}天
现在在{{province.DATA}}{{city.DATA}}
当前天气{{weather.DATA}}
当前气温{{temperature.DATA}}
风力描述{{winddirection.DATA}}
风力级别{{windpower.DATA}}
空气湿度{{humidity.DATA}}
{{author.DATA}}
{{origin.DATA}}
{{content.DATA}}
```  

好的，点击提交后你就可以看到模板ID了  
我们整理一下思路 把刚才的信息都复制出来  

:::info
AppID:  wxf3f806c8d5ad594dc  
AppSecret: 7b2a014b67f847a92bd7e21a76bb3088    
模板ID:  4TCJZfFVGg2lSq_BSbdLR7P8QJIh6YZxTjeD0CfDyGE  
男朋友/女朋友的微信号: oQFk-5nLtyR56zEJ38QG9wbmxME88  
:::  

**到这里我们需要的信息就准备好了 我们开始部署**


#### 4.修改配置文件

好的！我们开始修改配置文件，离成功又近了一步  

这个时候我们需要找到刚才解压的源码然后我们点文件夹进入到下图这里  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/11.png)  

其实我们只要改`Application`和`Boostrap`这两个文件就可以正常运行了  
考虑到大家可能不是程序员或者没有从事过开发的工作，我用最简单的方式教大家 直接用电脑自带的记事本编辑  
大家右键选择 打开方式 然后选择 记事本 打开就OK了  

**打开后是这样的**
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/12.png)  

**这个时候大家看到一些中文的注释 跟之前我们获取到的信息 就可以联系上了**  
:::info
AppID:  公众号AppID  
AppSecret: 公众号秘钥    
模板ID:  全局模板ID  也可针对单个Friend指定模板  
男朋友/女朋友的微信号: oQFk-5nLtyR56zEJ38QG9wbmxME88  (这个修改Application时需要)
:::  

哈哈~ 有印象了吧 大家依次将之前拿到的数据填入即可

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/13.png)  

这个文件就改好了, 我们继续修改下一个`Application`文件 我们同样使用记事本打开  

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/14.png)  

其他我们可以忽略 往下滑到图上位置 这下是不是很明确了~  

:::info
某女/男友:    其实就是名字  
江苏省:       换为自己的省  
南京市:       换为自己的市  
1999-08-08：  生日  
2011-04-16:   相爱的日子  
oQFk-5qtXv2uGNCu9oiCiV85KWD8   这个就是我们上面提到的男朋友/女朋友的微信号  
:::  

代码支持多人发送   
代码里我是写了两个案例 大家应该只有一个 女朋友/男朋友  图中选中的这个可以删除掉  
就只发一个人就行  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/15.png)  

好了！到这里我们前期步骤都好了！开始部署Github

:::danger
大家注意：默认代码里GithubActions默认是定时执行的 可能有些伙伴想立即看到效果 这个时候需要改动另外一个文件  
如果不需要立即见效 请继续往下看  
:::  
立即见效需要改动该文件红框位置  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/29.png)  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/30.png)  
上图main表示的是分支 这个如果是完全按照博客的步骤来的 就是main大家可以不必多想  
这个配置的话 就是这个分支 文件有变动（如何上传文件触发 下面会有答案） 就会自动执行一次    
临时更新: 发现有很多朋友加我 发现格式有问题 大家可以直接复制避免出现格式错误  
```txt
on:
  push:
    branches:
      - main
```


#### 5.如何免配置Java与Git环境发布代码到Github  
重点哦，大家不是开发人员，装环境可能要累死人了   
我教大家如何不用环境就可以部署  
我们回到Github  

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/16.png)  

点击右上角 选择 `new repository`  进入到下图界面 大家可以看图上我标注的文字  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/17.png)  

然后创建完就会到下面的界面
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/18.png)   

然后咱们选择 上传已有文件  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/19.png)   

然后这个页面我们选择文件 找到刚才解压且修改过的源码 ~~我们全选~~  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/20.png)  

![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/21.png)  

:::danger
~~大家注意，这时候虽然是全选的 但是只会上传不是文件夹的文件  文件夹后面我们需要手动创建~~  
注意虽然麻烦一些 但是可以免配置环境~
:::  
:::danger
这里订正一下，大家直接把文件夹拖进去 不要全选确认 拖进去的话会自动创建  
src/main/java/cn/ofpp/  
src/main/java/cn/ofpp/core/  
这两个文件夹 以及里面的文件能省好多事情 但是 `.github/workflows` 这个文件夹还是需要自己创建的    
:::  

上传成功后 我们会回到图下这个页面  ~~大家会发现没有刚才选中问文件夹 只有文件~~  
订正: 只是没有 `.github/workflows` 文件夹 以及里面的文件
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/22.png)  
我们选择图上的 `create new file`  
我们会到如下的页面
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/23.png)  
我们需要在这里创建出项目的结构（其实就是文件夹结构） 
我们可以通过 电脑的文件管理器 看到目录结构
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/24.png)   

  
我们需要创建的文件夹一共有下面~~三种~~（如果是拖拽进去的就只需要创建 `.github/workflows` 文件夹）
```txt
.github/workflows/
src/main/java/cn/ofpp/  
src/main/java/cn/ofpp/core/  
```  
建议大家直接复制我的文件夹格式 粘贴到框框里 会自动识别成文件夹  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/25.png)  

:::danger
大家请注意 这个时候识别成文件夹 但是无法保存 需要创建一个文件才行  
这个文件大家自己定 什么格式都行 比如我填的 a.txt 
然后大家往下滑保存在项目主页面就可以看到文件夹结构了  
这个时候我们再把文件夹下相应的文件传上去就可以了 
:::

~~第三个文件夹 `src/main/java/cn/ofpp/core/` 其实是 `src/main/java/cn/ofpp/` 的子文件夹 大家注意哦 其实只需要在 `ofpp` 文件夹里面创建`core`文件夹就可以了~~ （如果是拖拽进去的就不用自己创建这两个文件夹了）
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/26.png)  
按照这样的方法 我们创建出三个文件夹 

##### 创建完文件夹之后 我们上传文件 其实就和上面的步骤一样了  我们到相应的文件夹上传对应的文件即可  
#### 这个时候如果上面使用的是拖拽的 那么就只需要上传 .github/workflows/ci.yml 这个文件
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/27.png)  

# 集美们、伙伴们 上传文件后 这个时候我们就好了！  大家要自己检查文件是否都上传了  

上传完大概是这样的  
![image.png](https://my-blog-use.oss-cn-hangzhou.aliyuncs.com/use/28.png)   

:::info、
常见问题  

1.如何得知任务是否有执行  
答: 在你自己的项目主页，有个Actions的选项 点一下 可以看到`All workflows`下面会有一个`CareUEveryDay Cron CI`  
也可能没有Cron 然后点击它就可以看到它的运行记录 （红色表示失败，绿色表示执行成功）出现红色大概率是代码改的不对导致编译失败了  

2.任务执行成功但是没收到消息
答: 这种情况是配置有误，在你自己的项目主页，有个Actions的选项 点一下 可以看到`All workflows`下面会有一个`CareUEveryDay Cron CI`  
也可能没有Cron 右侧可以看到它的运行记录点击最新的一个记录的标题 进入详情，进入详情后点击左侧 `jobs` 标题下的`build`点击后右侧出现黑色框，  
然后大家点击 `SendWxTemplateMsg` 就会展开一个框框 里面如果是发送失败 就会打印错误信息 大家根据信息排查即可  
:::

:::danger
我不会向大家收钱 请大家积极举报  
如果大家实在难以完成，或有其他问题，可以加我的微信，可以帮大家看看是啥问题  
微信被加爆啦。。。
~~wx: DokiYoloo~~
:::

