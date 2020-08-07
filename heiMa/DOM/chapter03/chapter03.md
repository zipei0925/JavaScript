# 1.DOM
### 1.1 节点
- 元素节点:html文档中的标签元素,<html>元素是节点数的根元素
- 文本节点:标签之间包含着的文本,通常包含在元素节点内
- 属性节点:用来对元素做出更具体的描述,所有的属性都包含在元素中.(class,title,value等)
### 1.2 CSS
- 语法:
  ~~~JavaScript
  selector {
      property: value;
  }
    ~~~
- 节点树上的各个元素将继承其父元素的样式属性
- 可以使用相同的class属性标记一个或多个元素,选择器以 .className {}来定义
- id属性可以给网页里的某个元素加上一个独一无二的标识符,选择器以 #idName {}来定义
### 1.3 获取元素
- 每个元素都是一个对象
- 通过元素ID,返回对应元素节点的对象:document.getElementById("id")
- 通过标签的名字,返回一个对象数组:document.getElementByTagName("tsag"),数组中的每个元素的属性仍是对象,允许使用通配符"*"
- 通过class属性中的类名来访问元素:document.getElementsByClassName("className"),还可以同时包含多个类名.
### 1.4 获取和设置属性
- 获取元素内的属性值:value
  ~~~JavaScript
  object.getAttribute("attributeName")
  ~~~
- 设置元素内的属性值:
  ~~~JavaScript
  object.getAttribute("attributeName","value")
  ~~~