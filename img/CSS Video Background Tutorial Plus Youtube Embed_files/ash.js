function ash(){var ca = document.getElementsByTagName("code");for(var i=0; i < ca.length; i++){var data = ca[i].innerHTML;data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>').replace(/'(.*?)'/g, '<span class="code-str">&apos;$1&apos;</span>').replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>').replace(/&lt;!-- (.*?) --&gt;/g, '<span class="code-comment">&lt;!-- $1 --&gt;</span>').replace(/\/\* (.*?) \*\//g, '<span class="code-comment">/* $1 */</span>').replace(/(&lt;\?php)/g, '<span class="code-phptags">$1</span>').replace(/(&lt;\? )/g, '<span class="code-phptags">$1</span> ').replace(/(\?&gt;)/g, '<span class="code-phptags">$1</span>').replace(/\/\/ (.*?)\n/g, '<span class="code-comment">// $1<br></span>').replace(/(&lt;style&gt;)/g, '<span class="code-styletags">$1</span>').replace(/(&lt;\/style&gt;)/g, '<span class="code-styletags">$1</span>').replace(/(function)/g, '<b>$1</b>');ca[i].innerHTML = data;}}