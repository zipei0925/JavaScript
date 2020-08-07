# 案例研究
### 1.3 事件处理函数
- 链接<a>标签中的属性:
  1. 
- 鼠标指针悬停在某个元素上时触发一个动作
  :**onmouseover**
- 鼠标指针离开某个元素时触发一个动作     :**onmouseout**
- 点击某个链接时触发一个动作(未松开鼠标):  **onmousedown**
- 点击某个链接时触发一个动作(松开鼠标):  **onmouseup**
- 点击某个链接时触发一个动作(完成点击动作):  **onclick**
- 事件处理函数的语法:event = "Javascript statement(s)"
  可以把任意数量的语句放在引号内,语句之间用分号隔开
- childNodes属性:获取任意元素下的所有子元素,语法:
  ~~~~JavaScript
  element.childNodes
  ~~~~
- **onload**:页面加载事件,语法:
  ~~~JavaScript
  window.onload = Javascript.statement
  ~~~
- **nodeType**:获取节点的属性,语法:
  ~~~JavaScript
  node.nodeType
  ~~~
  返回的属性值为数字:
  1. 属性值为1表示元素节点
  2. 属性值为2表示属性节点
  3. 返回值为3表示文本节点
- **nodeValue**属性:获取或设置一个节点的值,语法:
  ~~~JavaScript
  node.nodeValue
  ~~~
  元素中包含的文本值,是元素字节点的第一个值.  
  ~~~JavaScript
  object.childNodes[0].nodeValue
  ~~~
- firstChild:获取childNodes数组中第一个元素
- lastChild:获取childNodes数组中最后一个元素
  ~~~JavaScript
  node.firstChild
  node.lastChild
  ~~~







