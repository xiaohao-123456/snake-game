# GitHub Pages配置指南

本指南将帮助您使用GitHub Pages将贪吃蛇游戏部署为可访问的网站。

## 什么是GitHub Pages？

GitHub Pages是GitHub提供的一项免费服务，可以直接从您的GitHub仓库托管静态网站。这非常适合托管HTML、CSS和JavaScript构建的网页游戏。

## 配置GitHub Pages

1. 登录您的GitHub账号
2. 导航到您的 "snake-game" 仓库
3. 点击仓库页面顶部的 "Settings" 选项卡
4. 在左侧菜单中，找到并点击 "Pages" 选项
5. 在 "Source" 部分，从下拉菜单中选择 "Deploy from a branch"
6. 在 "Branch" 下拉菜单中，选择 "main" 分支，并保持文件夹选择为 "/(root)"
7. 点击 "Save" 按钮
8. 等待几分钟，GitHub将构建并部署您的网站

## 访问您的游戏网站

部署完成后，您将在GitHub Pages设置页面看到一条消息，显示您的网站URL，通常格式为：

```
https://您的用户名.github.io/snake-game/
```

点击此链接即可在浏览器中访问并玩您的贪吃蛇游戏！

## 分享您的游戏

现在您的游戏已经上线，您可以：

1. 将游戏链接分享给朋友和家人
2. 在社交媒体上分享您的成就
3. 将链接添加到您的简历或个人网站中，展示您的编程技能

## 更新您的游戏

如果您想对游戏进行更改或改进：

1. 在本地修改代码
2. 将更新后的文件上传到GitHub仓库（使用与之前相同的方法）
3. GitHub Pages将自动更新您的网站，通常在几分钟内完成

## 自定义域名（可选）

如果您拥有自己的域名，您还可以将其配置为指向您的GitHub Pages网站：

1. 在GitHub Pages设置页面的 "Custom domain" 部分，输入您的域名
2. 按照GitHub提供的说明，在您的域名注册商处添加必要的DNS记录
3. 勾选 "Enforce HTTPS" 选项以启用安全连接

## 故障排除

如果您的网站没有正确显示：

1. 确保所有文件（index.html, style.css, script.js）都已正确上传到仓库的根目录
2. 检查文件名是否正确（区分大小写）
3. 查看GitHub Actions选项卡，检查是否有部署错误
4. 等待几分钟，有时GitHub Pages需要一些时间来更新

恭喜！您现在已经成功地将贪吃蛇游戏部署为一个可访问的网站！