(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{163:function(e,t,r){e.exports=r(305)},168:function(e,t,r){},169:function(e,t,r){},171:function(e,t,r){},302:function(e,t,r){},303:function(e,t,r){},304:function(e,t,r){},305:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(36),o=r.n(s),i=(r(168),r(41)),l=r(42),c=r(46),u=r(45),p=(r(169),r(170),r(57)),m=r(14),h=r(314),d=r(312),f=r(315),g=r(310),v=r(50),b=r(313),y=(r(171),function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).toggleOpenSidebarBtn=function(){n.setState((function(e){return{showOpenSidebarBtn:!e.showOpenSidebarBtn}}))},n.state={showOpenSidebarBtn:!1},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state.showOpenSidebarBtn,t=this.props,r=t.toggleSidebar,n=t.visible,s=function(e){return a.a.createElement(p.b,{exact:!0,to:e.to,onClick:e.onClick,className:e.className,activeClassName:"active"},e.children)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{visible:e,animation:"fade right",duration:700},a.a.createElement(g.a,{icon:!0,id:"openSidebarBtn",onClick:function(){return r("push")}},a.a.createElement(v.a,{name:"bars"}))),a.a.createElement(d.a,{as:b.a,inverted:!0,animation:"push",direction:"left",vertical:!0,width:"thin",visible:n,onHidden:this.toggleOpenSidebarBtn,onVisible:this.toggleOpenSidebarBtn,style:{zIndex:20}},a.a.createElement(b.a.Item,null,"TOPICS",a.a.createElement("span",{id:"closeSidebarBtn",role:"button",tabIndex:0,style:{float:"right"},onClick:function(){return r("push")},onKeyUp:function(){return r("push")}},"X")),a.a.createElement(b.a.Item,null,a.a.createElement(b.a.Header,null,"Sorting"),a.a.createElement(b.a.Menu,null,a.a.createElement(b.a.Item,{as:s,to:"/sorting/bubble-sort",name:"Bubble Sort"}),a.a.createElement(b.a.Item,{as:s,to:"/sorting/selection-sort",name:"Selection Sort"}),a.a.createElement(b.a.Item,{as:s,to:"/sorting/insertion-sort",name:"Insertion Sort"}),a.a.createElement(b.a.Item,{as:s,to:"/sorting/quick-sort",name:"Quick Sort"}),a.a.createElement(b.a.Item,{as:s,to:"/sorting/merge-sort",name:"Merge Sort"}))),a.a.createElement(b.a.Item,null,a.a.createElement(b.a.Header,null,"Pathfinding"),a.a.createElement(b.a.Menu,null,a.a.createElement(b.a.Item,{as:s,to:"/pathfinding/BFS",name:"BFS"})))))}}]),r}(n.Component));r(302);function S(e,t,r){var n=r[t];r[t]=r[e],r[e]=n}function E(e){var t=[],r=!0,n=1;for(t.push({action:"move cursor1",pos:e.length-n,label:"cur1"});r;){r=!1;for(var a=0;a<e.length-n;a++)t.push({action:"compare",i:a,j:a+1}),e[a]>e[a+1]&&(r=!0,S(a,a+1,e),t.push({action:"swap",i:a,j:a+1}));n+=1,e.length-n>=0&&t.push({action:"move cursor1",pos:e.length-n,label:"cur1"})}return{orderedList:e,steps:t,info:{title:"Bubble Sort",worstTime:"O(n^2)",bestTime:"O(n)",avgTime:"O(n^2)",space:"O(n)",pseudoCode:"function BubbleSort(list) {\n  swapped = true;\n  count = 1;\n  while (swapped) {\n    swapped = false;\n    for (let i = 0; i < list.length - count; i++) {\n      if (list[i] > list[i + 1]) {\n        swapped = true;\n        swap(i, i + 1, list);\n      }\n    }\n    count += 1;\n  }\n  return list;\n}"}}}function x(e){var t=[];return e.forEach((function(r,n){var a=n;for(t.push({action:"move cursor1",pos:n,label:"cur1"}),a>0&&t.push({action:"compare",i:a-1,j:a});a>0&&e[a-1]>e[a];)S(a-1,a,e),t.push({action:"swap",i:a-1,j:a}),--a>0&&t.push({action:"compare",i:a-1,j:a})})),{orderedList:e,steps:t,info:{title:"Insertion Sort",worstTime:"O(n^2)",bestTime:"O(n)",avgTime:"O(n^2)",space:"O(n)",pseudoCode:"function InsertionSort(list) {\n  const steps = [];\n  list.forEach((el, i) => {\n    let j = i;\n    while (j > 0 && list[j - 1] > list[j]) {\n      swap(j - 1, j, list);\n      j--;\n    }\n  });\n  return list;\n}"}}}function j(e){for(var t=[],r=0;r<e.length;){var n=r;t.push({action:"move cursor1",pos:n,label:"cur1"});for(var a=r+1;a<e.length;a++)t.push({action:"compare",i:a,j:n}),e[a]<e[n]&&(n=a);S(r,n,e),t.push({action:"swap",i:r,j:n}),r++}return{orderedList:e,steps:t,info:{title:"Selection Sort",worstTime:"O(n^2)",bestTime:"O(n^2)",avgTime:"O(n^2)",space:"O(1)",pseudoCode:"function SelectionSort(list) {\n  const steps = [];\n  let sortedArrLen = 0;\n  while (sortedArrLen < list.length) {\n    let cur = sortedArrLen;\n    steps.push({ action: 'move cursor1', pos: cur, label: 'cur1' });\n    for (let i = sortedArrLen + 1; i < list.length; i++) {\n      steps.push({ action: 'compare', i, j: cur });\n      if (list[i] < list[cur]) {\n        cur = i;\n      }\n    }\n    swap(sortedArrLen, cur, list);\n    steps.push({ action: 'swap', i: sortedArrLen, j: cur });\n    sortedArrLen++;\n  }\n  return list;\n}"}}}function O(e,t,r,n,a){for(a.push({action:"move cursor2",pos:t,label:"low"}),a.push({action:"move cursor3",pos:r,label:"high"});t<=r;){for(a.push({action:"compare",i:t,j:n});e[t]<e[n];)a.push({action:"compare",i:t,j:n}),t++,a.push({action:"move cursor2",pos:t,label:"low"});for(a.push({action:"compare",i:r,j:n});e[n]<e[r];)a.push({action:"compare",i:r,j:n}),r--,a.push({action:"move cursor3",pos:r,label:"high"});a.push({action:"compare",i:t,j:r}),t<=r&&(S(t,r,e),a.push({action:"swap",i:t,j:r}),n===t?(n=r,a.push({action:"move cursor1",pos:n,label:"pivot"})):n===r&&(n=t,a.push({action:"move cursor1",pos:n,label:"pivot"})),t++,a.push({action:"move cursor2",pos:t,label:"low"}),r--,a.push({action:"move cursor3",pos:r,label:"high"}))}return t}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(t>=r)return{orderedList:e,steps:n};var a=Math.floor((t+r)/2);n.push({action:"move cursor1",pos:a,label:"pivot"});var s=O(e,t,r,a,n),o=s-1-t<r-s;return o?(w(e,t,s-1,n),w(e,s,r,n)):(w(e,s,r,n),w(e,t,s-1,n)),{orderedList:e,steps:n,info:{title:"Quick Sort",worstTime:"O(n^2)",bestTime:"O(n * log(n))",avgTime:"O(n * log(n))",space:"O(log(n))",pseudoCode:"function QuickSort(list, lowerBound = 0, upperBound = list.length - 1,) {\n  if (lowerBound >= upperBound) {\n    return list;\n  }\n  const pivotIdx = Math.floor((lowerBound + upperBound) / 2);\n  const index = partition(list, lowerBound, upperBound, pivotIdx);\n\n  // Run recursively on the smallest sub-array to optimize space complexity\n  const leftSubArrayIsSmaller = (index - 1) - lowerBound < upperBound - index;\n  if (leftSubArrayIsSmaller) {\n    QuickSort(list, lowerBound, index - 1, steps);\n    QuickSort(list, index, upperBound, steps);\n  } else {\n    QuickSort(list, index, upperBound, steps);\n    QuickSort(list, lowerBound, index - 1, steps);\n  }\n  return list;\n}\n      \nfunction partition(list, left, right, pivotIdx) {\n  while (left <= right) {\n    while (list[left] < list[pivotIdx]) {\n      left++;\n    }\n\n    while (list[pivotIdx] < list[right]) {\n      right--;\n    }\n\n    if (left <= right) {\n      swap(left, right, list);\n      if (pivotIdx === left) {\n        pivotIdx = right;\n      } else if (pivotIdx === right) {\n        pivotIdx = left;\n      }\n      left++;\n      right--;\n    }\n  }\n  return left;\n}"}}}function k(e,t,r,n,a){for(var s=[],o=t,i=r+1;o<=r&&i<=n;)a.push({action:"move cursor1",pos:o,label:"left"}),a.push({action:"move cursor2",pos:i,label:"right"}),a.push({action:"compare",i:o,j:i}),e[o]<=e[i]?(a.push({action:"move cursor3",pos:t+s.length,label:"sort"}),s.push(e[o]),a.push({action:"replace",pos:t+s.length-1,value:e[o]}),o++):(a.push({action:"move cursor3",pos:t+s.length,label:"sort"}),s.push(e[i]),a.push({action:"replace",pos:t+s.length-1,value:e[i]}),i++);for(;o<=r;)a.push({action:"move cursor1",pos:o,label:"left"}),a.push({action:"compare",i:o,j:o}),a.push({action:"move cursor3",pos:t+s.length,label:"sort"}),s.push(e[o]),a.push({action:"replace",pos:t+s.length-1,value:e[o]}),o++;for(;i<=n;)a.push({action:"move cursor2",pos:i,label:"right"}),a.push({action:"compare",i:i,j:i}),a.push({action:"move cursor3",pos:t+s.length,label:"sort"}),s.push(e[i]),a.push({action:"replace",pos:t+s.length-1,value:e[i]}),i++;for(var l=t;l<=n;l++)e[l]=s[l-t]}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(t>=r)return{orderedList:e,steps:n};var a=Math.floor((t+r)/2);return C(e,t,a,n),C(e,a+1,r,n),k(e,t,a,r,n),{orderedList:e,steps:n,info:{title:"Merge Sort",worstTime:"O(n * log(n))",bestTime:"O(n * log(n))",avgTime:"O(n * log(n))",space:"O(n)",pseudoCode:"function MergeSort(list, lo = 0, hi = list.length - 1) {\n  if (lo >= hi) {\n    return list;\n  }\n  const mid = Math.floor((lo + hi) / 2);\n  MergeSort(list, lo, mid);\n  MergeSort(list, mid + 1, hi);\n  merge(list, lo, mid, hi);\n\n  return list;\n}\n\nfunction merge(list, lo, mid, hi) {\n  const sortedList = [];\n  let i = lo;\n  let j = mid + 1;\n  while (i <= mid && j <= hi) {\n    if (list[i] <= list[j]) {\n      sortedList.push(list[i]);\n      i++;\n    } else {\n      sortedList.push(list[j]);\n      j++;\n    }\n  }\n  while (i <= mid) {\n    sortedList.push(list[i]);\n    i++;\n  }\n  while (j <= hi) {\n    sortedList.push(list[j]);\n    j++;\n  }\n  for (let k = lo; k <= hi; k++) {\n    list[k] = sortedList[k - lo];\n  }\n}"}}}var I="rgb(116, 172, 255)";function B(e,t,r,n,a,s){s("init"),cancelAnimationFrame(r.current),clearTimeout(t.current),e.current=0,n.length>0&&n[0].ref.current&&function(e,t){t.forEach((function(t,r){e[r].ref.current.style.backgroundColor=I,e[r].ref.current.querySelector(".bar").style.height="".concat(t,"vh"),e[r].ref.current.querySelector(".barValue").innerText="".concat(t),e[r].ref.current.querySelector(".cursor1").style.display="none",e[r].ref.current.querySelector(".cursor2").style.display="none",e[r].ref.current.querySelector(".cursor3").style.display="none"}))}(n,a)}var R=a.a.forwardRef((function(e,t){var r=e.num,s=e.height,o=Object(n.useRef)(null);return a.a.createElement("div",{ref:t,className:"barContainer",style:{width:"".concat(s,"vw"),maxWidth:"50px"}},a.a.createElement("div",{className:"cursor1"},"cur 1"),a.a.createElement("div",{className:"cursor2"},"cur 2"),a.a.createElement("div",{className:"cursor3"},"cur 3"),a.a.createElement("div",{className:"barValue"},r),a.a.createElement("div",{ref:o,style:{height:"".concat(r,"vh")},className:"bar"}))})),P=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).getAlgOutput=function(e){var t=null;switch(e){case"bubble-sort":t=E(n.state.list.slice());break;case"selection-sort":t=j(n.state.list.slice());break;case"insertion-sort":t=x(n.state.list.slice());break;case"quick-sort":t=w(n.state.list.slice());break;case"merge-sort":t=C(n.state.list.slice());break;default:t=E(n.state.list.slice())}null!==t&&(n.setState({steps:t.steps}),n.setState({info:t.info}))},n.createBarsFromList=function(){var e=n.state.list.map((function(e,t){var r=a.a.createRef();return a.a.createElement(R,{key:t,ref:r,num:e,height:55/n.state.list.length})}));n.setState({bars:e})},n.setAnimationState=function(e){n.setState({animationState:e})},n.changeSpeed=function(e){n.speedPercentageRef.current=e.target.value,n.setState({speedPercentage:e.target.value})},n.generateRandomBars=function(e){for(var t=[],r=0;r<e;r++){var a=Math.floor(78*Math.random())+3;t.push(a)}n.setState({list:t})},n.state={list:[20,64,23,35,35,75,34,69,76,57,9,67,33,58,7,27,22,56,37,5,79,36,46,65],info:"",steps:[],animationState:"init",speedPercentage:100,listLength:24},n.currentStep=a.a.createRef(),n.lastCompared=a.a.createRef(),n.lastSwapped=a.a.createRef(),n.lastCursor1Pos=a.a.createRef(),n.lastCursor2Pos=a.a.createRef(),n.lastCursor3Pos=a.a.createRef(),n.lastRequestID=a.a.createRef(),n.timeOut=a.a.createRef(),n.speedPercentageRef=a.a.createRef(),n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.match;this.currentStep.current=0,this.lastCompared.current=[],this.lastSwapped.current=[],this.lastCursor1Pos.current=null,this.lastCursor2Pos.current=null,this.lastCursor3Pos.current=null,this.lastRequestID.current=null,this.timeOut.current=null,this.speedPercentageRef.current=100;var t=e.params&&e.params.alg?e.params.alg:"bubble-sort";this.getAlgOutput(t),this.createBarsFromList()}},{key:"componentDidUpdate",value:function(e,t){var r=this.props.match,n=r.params&&r.params.alg?r.params.alg:"bubble-sort";r.params&&r.params.alg!==e.match.params.alg&&(console.log("Route change!"),this.getAlgOutput(n),B(this.currentStep,this.timeOut,this.lastRequestID,this.state.bars,this.state.list,this.setAnimationState)),this.state.list!==t.list&&(this.getAlgOutput(n),this.createBarsFromList())}},{key:"render",value:function(){var e=this;return a.a.createElement(h.a,{stackable:!0,id:"container"},a.a.createElement(h.a.Row,null,a.a.createElement(h.a.Column,{width:4},a.a.createElement("h1",null,this.state.info.title),a.a.createElement("p",null,a.a.createElement("span",null,"Worst Time: "),a.a.createElement("span",null,this.state.info.worstTime),a.a.createElement("br",null),a.a.createElement("span",null,"Avg. Time: "),a.a.createElement("span",null,this.state.info.avgTime),a.a.createElement("br",null),a.a.createElement("span",null,"Best Time: "),a.a.createElement("span",null,this.state.info.bestTime),a.a.createElement("br",null),a.a.createElement("span",null,"Space: "),a.a.createElement("span",null,this.state.info.space)),a.a.createElement("pre",null,this.state.info.pseudoCode)),a.a.createElement(h.a.Column,{width:12},"playing"===this.state.animationState?a.a.createElement(g.a,{id:"pauseBtn",icon:"pause",content:"Pause",onClick:function(){return t=e.timeOut,r=e.lastRequestID,n=e.setAnimationState,cancelAnimationFrame(r.current),clearTimeout(t.current),void n("paused");var t,r,n}}):a.a.createElement(g.a,{id:"playBtn",disabled:"done"===this.state.animationState,icon:"play",content:"Play",onClick:function(){!function e(t,r,n,a,s,o,i,l,c,u,p,m){m("playing"),i.current=requestAnimationFrame((function(){var h=c[t.current];switch(h.action){case"compare":l&&(r.current.length>0&&(l[r.current[0]].ref.current.style.backgroundColor=I,l[r.current[1]].ref.current.style.backgroundColor=I),l[h.i].ref.current.style.backgroundColor="#ff7961",l[h.j].ref.current.style.backgroundColor="#f44336",r.current=[h.i,h.j]);break;case"swap":if(l){var d=l[h.i].ref.current.querySelector(".bar").style.height,f=l[h.j].ref.current.querySelector(".bar").style.height,g=l[h.i].ref.current.style.backgroundColor,v=l[h.j].ref.current.style.backgroundColor;l[h.i].ref.current.querySelector(".barValue").innerText=parseInt(f,10),l[h.j].ref.current.querySelector(".barValue").innerText=parseInt(d,10),l[h.i].ref.current.querySelector(".bar").style.height=f,l[h.j].ref.current.querySelector(".bar").style.height=d,l[h.i].ref.current.style.backgroundColor=v,l[h.j].ref.current.style.backgroundColor=g,n.current=[h.i,h.j]}break;case"move cursor1":l&&(null!==a.current&&(l[a.current].ref.current.querySelector(".cursor1").style.display="none"),h.pos>=l.length?a.current=null:(l[h.pos].ref.current.querySelector(".cursor1").style.display="block",h.label&&(l[h.pos].ref.current.querySelector(".cursor1").innerText=h.label),a.current=h.pos),r.current.length>0&&(l[r.current[0]].ref.current.style.backgroundColor=I,l[r.current[1]].ref.current.style.backgroundColor=I),n.current.length>0&&(l[n.current[0]].ref.current.style.backgroundColor=I,l[n.current[1]].ref.current.style.backgroundColor=I));break;case"move cursor2":l&&(null!==s.current&&(l[s.current].ref.current.querySelector(".cursor2").style.display="none"),h.pos>=l.length?s.current=null:(l[h.pos].ref.current.querySelector(".cursor2").style.display="block",h.label&&(l[h.pos].ref.current.querySelector(".cursor2").innerText=h.label),s.current=h.pos),r.current.length>0&&(l[r.current[0]].ref.current.style.backgroundColor=I,l[r.current[1]].ref.current.style.backgroundColor=I),n.current.length>0&&(l[n.current[0]].ref.current.style.backgroundColor=I,l[n.current[1]].ref.current.style.backgroundColor=I));break;case"move cursor3":l&&(null!==o.current&&(l[o.current].ref.current.querySelector(".cursor3").style.display="none"),h.pos>=l.length?o.current=null:(l[h.pos].ref.current.querySelector(".cursor3").style.display="block",h.label&&(l[h.pos].ref.current.querySelector(".cursor3").innerText=h.label),o.current=h.pos),r.current.length>0&&(l[r.current[0]].ref.current.style.backgroundColor=I,l[r.current[1]].ref.current.style.backgroundColor=I),n.current.length>0&&(l[n.current[0]].ref.current.style.backgroundColor=I,l[n.current[1]].ref.current.style.backgroundColor=I));break;case"replace":l&&(l[h.pos].ref.current.querySelector(".barValue").innerText=parseInt(h.value,10),l[h.pos].ref.current.querySelector(".bar").style.height="".concat(h.value,"vh"));break;default:console.log("default case")}t.current+=1,t.current<c.length?u.current=setTimeout((function(){return e(t,r,n,a,s,o,i,l,c,u,p,m)}),-20*p.current+2e3):m("done")}))}(e.currentStep,e.lastCompared,e.lastSwapped,e.lastCursor1Pos,e.lastCursor2Pos,e.lastCursor3Pos,e.lastRequestID,e.state.bars,e.state.steps,e.timeOut,e.speedPercentageRef,e.setAnimationState)}}),a.a.createElement(g.a,{id:"resetBtn",icon:"repeat",content:"Reset",onClick:function(){return B(e.currentStep,e.timeOut,e.lastRequestID,e.state.bars,e.state.list,e.setAnimationState)}})," Speed: ",a.a.createElement("input",{id:"speedSlider",type:"range",min:0,max:100,value:this.state.speedPercentage,onChange:this.changeSpeed})," ".concat(this.state.speedPercentage,"%"),a.a.createElement("br",null)," Number of Values: ",a.a.createElement("input",{id:"listLengthSlider",type:"range",min:3,max:50,value:this.state.listLength,onChange:function(t){B(e.currentStep,e.timeOut,e.lastRequestID,e.state.bars,e.state.list,e.setAnimationState),e.setState({listLength:t.target.value}),e.generateRandomBars(t.target.value)}})," ".concat(this.state.listLength),a.a.createElement(g.a,{id:"newRandomSet",icon:"random",content:"New Random Set",onClick:function(){B(e.currentStep,e.timeOut,e.lastRequestID,e.state.bars,e.state.list,e.setAnimationState),e.generateRandomBars(e.state.listLength)},style:{margin:"0px 10px"}}),a.a.createElement("br",null),a.a.createElement("br",null),this.state.bars)))}}]),r}(n.Component),q=Object(m.f)(P),T=r(38);r(303);var A=function(e){var t=e.type,r=e.selectedItem,n=e.setSelectedItem,s=e.availability;return a.a.createElement("span",{className:"item ".concat(r===t?"selected":""),role:"button",onClick:function(){n(t)},tabIndex:0,onKeyPress:function(){return n(t)}},function(e,t){switch(e){case"player":return a.a.createElement(v.a,{className:"street view ".concat(t?"inverted blue":"inverted grey"),style:{fontSize:"35px",position:"relative",top:"0px",left:"-1px"}});case"wall":return a.a.createElement(v.a,{className:"square full ".concat(t?"grey":"inverted grey"),style:{fontSize:"30px",position:"relative",top:"-1px",left:"0px"}});case"treasure":return a.a.createElement(v.a,{className:"home ".concat(t?"inverted green":"inverted grey"),style:{fontSize:"35px",position:"relative",top:"0px",left:"-1px"}});case"empty":return a.a.createElement(v.a,{className:"eraser inverted red",style:{fontSize:"35px",position:"relative",top:"0px",left:"-1px"}});default:return null}}(t,s),"empty"===t?"Eraser":"".concat(t," x").concat(s))},L="player",N="wall",M="treasure",D="empty";var F=function(e){var t=e.selectedItem,r=e.setSelectedItem,n=e.inventory,s=e.find,o=e.pause,i=e.reset,l=e.animationState;return a.a.createElement("div",{id:"pathfinding_items"},a.a.createElement(A,{type:L,selectedItem:t,setSelectedItem:r,availability:n.player}),a.a.createElement(A,{type:N,selectedItem:t,setSelectedItem:r,availability:n.wall}),a.a.createElement(A,{type:M,selectedItem:t,setSelectedItem:r,availability:n.treasure}),a.a.createElement(A,{type:D,selectedItem:t,setSelectedItem:r}),"playing"===l?a.a.createElement(g.a,{id:"pauseBtn",icon:"pause",content:"Pause",onClick:function(){return o()}}):a.a.createElement(g.a,{id:"playBtn",disabled:"done"===l||n.player+n.treasure>0,icon:"play",content:"Play",onClick:function(){return s()}}),a.a.createElement(g.a,{id:"resetBtn",icon:"repeat",content:"Reset",onClick:function(){return i()}}))},z=r(49),Q=r(25),V=r(78);r(304);var G=function(e){var t=e.type,r=e.visiting,n=e.visited,s=e.pos,o=e.paint,i=e.onPath;return a.a.createElement("div",{role:"button",className:"".concat(t," cell ").concat(n?"visited":""," ").concat(r?"visiting":""," ").concat(i?"path":""),onMouseDown:function(){return o(s,t)},onMouseEnter:function(){return o(s,t)},tabIndex:0,onKeyPress:function(){return o(s,t)},style:{overflow:"show"}},"player"===t?a.a.createElement(v.a,{className:"street view inverted blue",style:{fontSize:"35px",position:"relative",top:"0px",left:"-1px"}}):"","treasure"===t?a.a.createElement(v.a,{className:"home inverted green",style:{fontSize:"40px",position:"relative",top:"-5px",left:"-5px"}}):"")};function H(e,t,r){var n=Object(V.a)(e);return n[t.y][t.x]=Object(Q.a)(Object(Q.a)({},n[t.y][t.x]),r),n}var W=function(e){var t=e.width,r=e.selectedItem,n=e.inventory,s=e.setGrid,o=e.setInventory,i=e.setPlayerPos,l=e.setGoalPos,c=e.grid,u=n[r];function p(e,t){var n=r;1===window.event.which&&u>0&&("empty"===n&&"empty"!==t?(s(H(c,e,{type:n})),o((function(e){return Object(Q.a)(Object(Q.a)({},e),{},Object(z.a)({},t,e[t]+1))}))):"empty"!==n&&n!==t&&(s(H(c,e,{type:n})),o((function(e){var r;return Object(Q.a)(Object(Q.a)({},e),{},(r={},Object(z.a)(r,n,u-1),Object(z.a)(r,t,e[t]+1),r))})),"player"===n?i(e):"treasure"===n&&l(e)))}return a.a.createElement("div",{id:"GridContainer",style:{width:"".concat(40*t+10,"px")}},c.map((function(e,t){return a.a.createElement("div",{key:t,style:{marginBottom:"-4px"}},e.map((function(e){return a.a.createElement(G,{key:JSON.stringify(e.pos),type:e.type,visited:e.visited,visiting:e.visiting,onPath:e.onPath,pos:e.pos,paint:p})})))})))};var J=function(e,t,r){for(var n=[],a=[],s=Array.from(Array(t.length),(function(){return Array(t[0].length)})),o=Array.from(Array(t.length),(function(){return Array(t[0].length)})),i=[{pos:e,prev:{y:null,x:null}}];i.length>0;){var l=i.shift(),c=l.pos,u=l.prev,p=c.x,m=c.y;if(!(m<0||p<0||m>=t.length||p>=t[0].length||s[m][p]||"wall"===t[m][p].type)){if(s[m][p]=!0,o[m][p]={y:u.y,x:u.x},n.push({y:m,x:p}),m===r.y&&p===r.x){var h=m,d=p;for(a.push({y:m,x:p});h!==e.y||d!==e.x;){a.push({y:h,x:d});var f=h;h=o[h][d].y,d=o[f][d].x}return console.log("found at y:".concat(m,", x:").concat(p)),{visits:n,path:a}}i.push({pos:{y:m,x:p+1},prev:{y:m,x:p}}),i.push({pos:{y:m,x:p-1},prev:{y:m,x:p}}),i.push({pos:{y:m+1,x:p},prev:{y:m,x:p}}),i.push({pos:{y:m-1,x:p},prev:{y:m,x:p}})}}return{visits:n,path:a}};function K(e,t,r){var n=Object(V.a)(e);return n[t.y][t.x]=Object(Q.a)(Object(Q.a)({},n[t.y][t.x]),r),n}function U(e,t,r){cancelAnimationFrame(t.current),clearTimeout(e.current),r("paused")}function X(e,t){for(var r=[],n=0;n<e;n++){r.push([]);for(var a=0;a<t;a++)r[n].push({pos:{x:a,y:n},type:"empty",visited:!1,visiting:!1})}return r}var $=function(){var e=Object(n.useState)(null),t=Object(T.a)(e,2),r=t[0],s=t[1],o={player:1,wall:50,treasure:1,empty:1/0},i=Object(n.useState)(o),l=Object(T.a)(i,2),c=l[0],u=l[1],p=Object(n.useState)(null),m=Object(T.a)(p,2),h=m[0],d=m[1],f=Object(n.useState)(null),g=Object(T.a)(f,2),v=g[0],b=g[1],y=Object(n.useState)(null),S=Object(T.a)(y,2),E=S[0],x=S[1],j=Object(n.useState)("default"),O=Object(T.a)(j,2),w=O[0],k=O[1],C=Object(n.useRef)(null),I=Object(n.useRef)(null),B=Object(n.useRef)(0),R=Object(n.useRef)([]);return a.a.createElement("div",{style:{padding:"30px"}},a.a.createElement(F,{selectedItem:r,setSelectedItem:s,inventory:c,find:function(){var e=J(h,E,v),t=e.visits,r=e.path;t.length>1&&(0===R.current.length&&(r.length>0?R.current=[{steps:t,type:"visits"},{steps:r,type:"path"}]:R.current=[{steps:t,type:"visits"}]),function e(t,r,n,a,s,o,i,l){l("playing"),s=requestAnimationFrame((function(){var c=n.current[0],u=c.steps,p=c.type,m=u[a.current],h=m.x,d=m.y;void 0!==t[d][h]&&("path"===p?r(K(t,{y:d,x:h},{visited:!0,onPath:!0})):"visits"===p&&(a.current>0&&r(K(t,{y:u[a.current-1].y,x:u[a.current-1].x},{visited:!0,visiting:!1})),r(K(t,{y:d,x:h},{visited:!1,visiting:!0})))),a.current+=1,a.current<u.length?o.current=setTimeout((function(){return e(t,r,n,a,s,o,i,l)}),-20*i+2e3):(a.current=0,n.current.length>1?(n.current.shift(),a.current=0,e(t,r,n,a,s,o,i,l)):l("done"))}))}(E,x,R,B,I,C,100,k))},reset:function(){U(C,I,k),B.current=0,R.current=[],x(null),u(o),k("init")},pause:function(){U(C,I,k)},animationState:w}),a.a.createElement(W,{width:35,height:20,selectedItem:r,inventory:c,setInventory:u,setPlayerPos:d,setGoalPos:b,setGrid:x,grid:E||X(20,35)}))},_=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).toggleSidebar=function(){return n.setState((function(e){return{visible:!e.visible}}))},n.state={visible:!0},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state.visible;return a.a.createElement(p.a,null,a.a.createElement(h.a,{style:{margin:"0px"}},a.a.createElement(h.a.Column,{width:16,style:{minHeight:"100vh",padding:"0px"}},a.a.createElement(d.a.Pushable,null,a.a.createElement(y,{visible:e,toggleSidebar:this.toggleSidebar}),a.a.createElement(d.a.Pusher,null,a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/sorting/:alg"},a.a.createElement(q,null)),a.a.createElement(m.a,{path:"/pathfinding/:alg"},a.a.createElement($,null)),a.a.createElement(m.a,{path:"/"},a.a.createElement(q,null))))))))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.0d74c2be.chunk.js.map