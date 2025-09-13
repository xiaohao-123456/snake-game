# GitHub仓库创建和代码上传指南

本指南将帮助您在GitHub上创建一个新仓库，并上传贪吃蛇游戏的代码。

## 1. 创建GitHub账号

如果您还没有GitHub账号，请先访问 [GitHub官网](https://github.com) 注册一个账号。

## 2. 创建新仓库

1. 登录您的GitHub账号
2. 点击右上角的 "+" 图标，选择 "New repository"
3. 在 "Repository name" 字段中输入 "snake-game"
4. 添加描述："一个简单的网页版贪吃蛇游戏"
5. 选择 "Public" 选项（如果您想让其他人也能访问您的游戏）
6. 勾选 "Add a README file" 选项
7. 点击 "Create repository" 按钮

## 3. 上传代码到仓库

### 方法一：使用GitHub网页界面上传

1. 在您新创建的仓库页面，点击 "Add file" 按钮，然后选择 "Upload files"
2. 将您本地的 `index.html`、`style.css` 和 `script.js` 文件拖拽到上传区域
3. 在 "Commit changes" 部分，添加提交信息，例如："上传贪吃蛇游戏代码"
4. 点击 "Commit changes" 按钮完成上传

### 方法二：使用Git命令行上传（适合熟悉Git的用户）

1. 安装Git（如果尚未安装）：访问 [Git官网](https://git-scm.com/) 下载并安装
2. 打开命令行终端（Windows上的PowerShell或CMD）
3. 导航到您的项目文件夹：
   ```
   cd d:\cpp\snake-game
   ```
4. 初始化Git仓库：
   ```
   git init
   ```
5. 添加远程仓库：
   ```
   git remote add origin https://github.com/您的用户名/snake-game.git
   ```
6. 添加所有文件到暂存区：
   ```
   git add .
   ```
7. 提交更改：
   ```
   git commit -m "初始提交：贪吃蛇游戏代码"
   ```
8. 拉取远程仓库（因为您在GitHub上初始化了README文件）：
   ```
   git pull origin main --rebase
   ```
9. 推送代码到GitHub：
   ```
   git push -u origin main
   ```

## 4. 验证上传

上传完成后，刷新您的GitHub仓库页面，确认所有文件都已成功上传：
- index.html
- style.css
- script.js
- README.md

现在您已经成功创建了GitHub仓库并上传了贪吃蛇游戏的代码！接下来，您可以按照 "GitHub Pages配置指南" 将您的游戏部署为网站。