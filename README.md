# 【插件】jsonx：rollup-plugin-jsonx - 可注释的 json 文件

## 说在前头

该插件目前只能在 rollup 解析下执行，可配合 vscode 插件 **jsonx** 提供静态校验+配色

后期根据需求量再看是否扩展添加

---

## 如何使用

在 rollup 配置文件中，添加至 plugins 即可

```js
import jsonx from "rollup-plugin-jsonx";

const publicConf = [
  {
    // other...
    plugins: [
      // other...
      jsonx()
      // other...
    ]
  }
];
```

# 关于

make：o︻そ ╆OVE▅▅▅▆▇◤（清一色天空）

blog：http://blog.csdn.net/mcky_love

掘金：https://juejin.im/user/59fbe6c66fb9a045186a159a/posts

lofter：http://zcxy-gs.lofter.com/

sf：https://segmentfault.com/u/mybestangel

git：https://github.com/gs3170981/npm-jsonx.git

---

# 结束语

如有 bug/意见，望提 Issues，如好用请 star~
