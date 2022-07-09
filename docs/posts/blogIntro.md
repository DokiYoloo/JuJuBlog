---
icon: edit
date: 2022-07-08
category:
  - 技术讨论
tag:
  - 博客架构
star: true
sidebar: false
---

# 本博客搭建流程
::: tip
本站基于[VuePress v2](https://v2.vuepress.vuejs.org/)搭建，主题使用[VuePressThemeHope v2](https://vuepress-theme-hope.github.io/v2/)。
部署时VuePress版本v2.0.0-beta.48 :tada:
这个文章没有什么真实内容，全是测试博客格式的～
:::

## VuePress介绍
VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

一个 VuePress 站点本质上是一个由 Vue 和 Vue Router 驱动的单页面应用 (SPA)。
路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 markdown-it 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。
在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。
在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby。

## 为什么选Hope作为主题
Hope支持比较丰富的代码格式 以及流程图等 下面是展示

### 演示1
::: code-tabs#language

@tab TS

```ts {8-11}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
      },
    },
  }),
});
```

@tab JS

```js {7-10}
// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");
module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
      },
    },
  }),
};
```

:::

#### 用法

你需要将选项卡包装在 `tabs` 容器中。

你可以在 `tabs` 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。

```md
::: tabs#fruit

<!-- 这里，fruit 将用作 id，它是可选的 -->

<!-- 选项卡内容 -->

:::
```

在这个容器内，你应该使用 `@tab` 标记来标记和分隔选项卡内容。

在 `@tab` 标记后，你可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为选项卡标题。

```md
::: tabs

@tab 标题 1

<!-- tab 1 内容 -->

@tab 标题 2

<!-- tab 2 内容 -->

@tab:active 标题 3

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```

默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。

```md
::: tabs

@tab 标题 1

<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

<!-- tab 1 内容 -->

@tab 标题 2#值 2

<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

<!-- tab 2 内容 -->

:::
```

:::: info 一起切换并保持选择

如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。

针对每个选项卡 ID 的选择会被存储并进行持久化。

下方是一个案例。

选择包管理器:

::: tabs#shell

@tab npm

npm 应该与 Node.js 被一同安装。

@tab pnpm

如果你使用的是 Node.js v16+，你可以使用 corepack 来启用 pnpm:

```bash
corepack prepare pnpm@7.2.1 --activated
```

否则，你可以使用 npm 安装它:

```bash
npm i -g pnpm
```

:::

安装 `vuepress-plugin-md-enhance`:

::: tabs#shell

@tab 使用 npm#npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```

@tab 使用 pnpm#pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance@next
```

:::

::::

#### 案例

一个水果选项卡列表:

::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::

```md
::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
```

另一个水果选项卡列表:

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

```md
::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
```

一个没有绑定 id 的水果选项卡列表:

::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

```md
::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
```

### 演示2
::: code-tabs#language

@tab TS

```ts {8-10}
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        flowchart: true,
      },
    },
  }),
});
```

@tab JS

```js {7-9}
// .vuepress/config.js
const { hopeTheme } = require("vuepress-theme-hope");
module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        flowchart: true,
      },
    },
  }),
};
```

:::

### 语法

````md
<!-- ↓ :preset 是可选的 -->

```flow:preset
<!-- 放置你的流程图代码 -->
```
````

目前可用的预设:

- `vue` (默认)
- `ant`
- `pie`

### 演示

```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

```flow:ant
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

```flow:pie
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

````md
```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future
st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
````

### 流程图介绍

#### 节点类型

定义了结点形状

##### 开始 & 结束

被用于流程开始的第一个节点。
默认文字为 `Start`.

- `[Variable]->start: [Text]`

被用于流程结束的最后一个节点。
默认文字为 `End`.

- `[Variable]->end: [Text]`

````md
```flow
st=>start: 开始
e=>end: 结束
st->e
```
````

```flow
st=>start: 开始
e=>end: 结束
st->e
```

##### 操作

- `[Variable]->operation: [Text]`

````md
```flow
process=>operation: 操作
e=>end: 结束
process->e
```
````

```flow
process=>operation: 操作
e=>end: 结束
process->e
```

##### 输入输出

- `[Variable]->inputoutput: [Text]`

````md
```flow
process=>inputoutput: 输入输出
e=>end: 结束
process->e
```
````

```flow
process=>inputoutput: 输入输出
e=>end: 结束
process->e
```

##### 子程序

- `[Variable]->subroutine: [Text]`

````md
```flow
process=>subroutine: 子程序
e=>end: 结束
process->e
```
````

```flow
process=>subroutine: 子程序
e=>end: 结束
process->e
```

##### 条件

- `[Variable]->condition: [Text]`

- `[Variable]([yesText])->[Position]`
- `[Variable]([noText])->[Position]`

````md
```flow
cond=>condition: 是否执行操作?
process=>operation: 操作
e=>end: 结束
cond(yes)->process->e
cond(no)->e
```
````

```flow
cond=>condition: 是否执行操作?
process=>operation: 操作
e=>end: 结束
cond(yes)->process->e
cond(no)->e
```

##### 平行

定义同时开始的多个程序。

- `[Variable]->parallel: [Text]`
- `[Variable](path1, direction)->[Position]`
- `[Variable](path1, direction)->[Position]`

````md
```flow
para=>parallel: 平行任务
process=>operation: 操作
e=>end: 结束
para(path1, bottom)->process->e
para(path2)->e
```
````

```flow
para=>parallel: 平行任务
process=>operation: 操作
e=>end: 结束
para(path1, bottom)->process->e
para(path2)->e
```

#### 链接

连接方式在流程图中节点定义后描述，使用 `->` 指定一个节点之间的链接，例如 `nodeVar1->nodeVar2->nodeVar3`

流程可以被分开:

```md
nodeVar1->nodeVar2
nodeVar2->nodeVar3
```

连接格式定义如下:

`<node variable name>[(<specificaion1>[, <specification2])]-><node variable name>[[(<specificaion1>[, <specification2])]-><node variable name>]`

在 `[]` 中的项是可选的。

#### 方向

以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。`<direction>` 的可选值为:

- `left`
- `right`
- `top`
- `bottom`

#### 节点特定说明符

每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 `()` 中的变量名后添加说明符，并用`,` 分隔，例如 `nodeVar (spec1，spec2)`。

- **start**
  **operation**
  **inputoutput**
  **subroutine**

  可选方向

  `startVar(<direction>)->nextNode`

  `operationVar(<direction>)->nextNode`

  `inputoutputVar(<direction>)->nextNode`

  `subroutineVar(<direction>)->nextNode`

- **condition**

  必需指定 `yes` or `no`

  可选方向

  ```md
  conditionalVar(yes, <direction>)->nextNode1
  conditionalVar(no, <direction>)->nextNode2
  ```

- **parallel**

  必需指定路径方向 `path1`, `path2`, 或 `path3`

  可选方向

  ```md
  parallelVar(path1, <direction>)->nextNode1
  parallelVar(path2, <direction>)->nextNode2
  parallelVar(path3, <direction>)->nextNode3
  ```

#### 网址

可以使用 `:>` 运算符将外部链接添加到节点。

`[blank]` 指定打开新的页面

```md
st=>start: Start:>http://www.google.com[blank]
e=>end: End:>http://www.yahoo.com
```

#### 建议

文本中可能不应该使用的符号: `=>`、`->`、 `:>`、`|`、`@>` 和 `:$`

如果要在流程图中强调特定路径，则可以另外定义它，如下所示:

```md
st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})
```