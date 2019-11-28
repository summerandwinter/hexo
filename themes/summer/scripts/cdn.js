'use strict';
const cdnUrl = hexo.config.cdnUrl;
hexo.extend.filter.register('before_post_render', function(data) {
    data.content = data.content.replace(
        /\!\[(.*)\]\((.*)\)/g,
        (match, text, url, offset, string) => {
          if (!/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(url) && cdnUrl) {
            return "![" + text + "](" + cdnUrl + url + ")";      
          } else {
            return "![" + text + "](" + url + ")";    
          }
        },
      );
});