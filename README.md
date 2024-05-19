当在 pnpm 工作区中使用时，Lerna 将：

使用 pnpm-workspace.yaml (https://pnpm.nodejs.cn/workspaces) 解析包的位置

忽略 package.json 中的 "workspaces"

阻止使用 bootstrap、link 和 add 命令。相反，你应该直接使用 pnpm 命令来管理依赖 (https://pnpm.nodejs.cn/cli/install)。

尊重 工作区协议 的包依赖。

在 lerna version 期间，依赖将照常更新，但将保留 workspace: 前缀（如果存在）。

如果使用 工作区别名，则 lerna version 将不会更改依赖的版本，因为别名不指定要更改的版本号。