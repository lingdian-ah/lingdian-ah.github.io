## github.io 页面创建方式
### 1.方式一
   
**访问路径：**

[http://lingdian-ah.github.io](http://lingdian-ah.github.io "repository")

访问的是 master 分支下的静态页面 index.html，无法引用 css、js
    
**创建方式：**

  新建repository，名称为：github用户名 + ".github.io"，例如：lingdian-ah.github.io；

  项目新建文件index.html，添加内容，上传后，即可访问上面的地址了。
    
### 2.方式二
  
**访问路径：**

[https://lingdian-ah.github.io/lingdian-ah.github.io/](https://lingdian-ah.github.io/lingdian-ah.github.io/ "https://lingdian-ah.github.io/lingdian-ah.github.io/")

访问的是 gh-pages 分支下的静态页面 index.html，引用当前分支下的：index.css、index.js

**创建方式：**

任意repository，新建分支gh-pages，该分支中创建文件 index.html、index.css、index.js；

上传后，即可访问上面的地址了。而且在index.html中引用的样式、脚本文件都是有效的。