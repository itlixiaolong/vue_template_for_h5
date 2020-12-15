const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,100}/

if (!commitRE.test(msg)) {
  console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
    `)
  process.exit(1)
}
/*
# git commit 规范

<type>(<scope>): <subject> //fix (global,route, component, utils, build) commit 的概述
<BLANK LINE>
<body>   //commit 具体修改内容, 可以分为多行.
<BLANK LINE>
<footer> //一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

大致分为三个部分(使用空行分割):

标题行: 必填, 描述主要修改类型和内容
主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
页脚注释: 可以写注释，BUG 号链接

# type: commit 的类型

feat: 新功能、新特性
fix: 修改 bug
perf: 更改代码，以提高性能
refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改（例如分号修改）
test: 测试用例新增、修改
build: 影响项目构建或依赖项修改
revert: 恢复上一次提交
ci: 持续集成相关文件修改
chore: 其他修改（不在上述类型中的修改）
release: 发布新版本
workflow: 工作流相关文件修改

# 格式

scope: commit 影响的范围, 比如: route, component, utils, build...
subject: commit 的概述
body: commit 具体修改内容, 可以分为多行.
footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
*/
