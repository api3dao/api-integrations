"use strict";(self.webpackChunkconfig_manager=self.webpackChunkconfig_manager||[]).push([[4657],{765:function(n){function e(n){!function(n){var e=n.util.clone(n.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function g(n,e){return n=n.replace(/<S>/g,(function(){return t})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(n,e)}s=g(s).source,n.languages.jsx=n.languages.extend("markup",e),n.languages.jsx.tag.pattern=g(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=e.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:g(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:g(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var o=function n(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(n).join(""):""},c=function e(t){for(var a=[],s=0;s<t.length;s++){var g=t[s],c=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===o(g.content[0].content[1])&&a.pop():"/>"===g.content[g.content.length-1].content||a.push({tagName:o(g.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===g.type&&"{"===g.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof g)&&a.length>0&&0===a[a.length-1].openedBraces){var r=o(g);s<t.length-1&&("string"===typeof t[s+1]||"plain-text"===t[s+1].type)&&(r+=o(t[s+1]),t.splice(s+1,1)),s>0&&("string"===typeof t[s-1]||"plain-text"===t[s-1].type)&&(r=o(t[s-1])+r,t.splice(s-1,1),s--),t[s]=new n.Token("plain-text",r,null,r)}g.content&&"string"!==typeof g.content&&e(g.content)}};n.hooks.add("after-tokenize",(function(n){"jsx"!==n.language&&"tsx"!==n.language||c(n.tokens)}))}(n)}n.exports=e,e.displayName="jsx",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.20592de2.chunk.js.map