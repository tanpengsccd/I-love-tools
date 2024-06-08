function check_is_ip(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
} 
function check_is_url(url) {
　　const strRegex = '^((https|Net)://)?'//(https或http或ftp):// 可有可无
　　+ '(([0-9]{1,3}\\.){3}[0-9]{1,3}' // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
　　+ '|' // 允许IP和DOMAIN（域名）
　　+ '([\\w_!~*\'()-]+\\.)*' // 域名- 至少一个[英文或数字_!~*\'()-]加上.
　　+ '\\w+\\.' // 一级域名 -英文或数字 加上.
　　+ '[a-zA-Z]{1,6})' // 顶级域名- 1-6位英文
　　+ '(:[0-9]{1,5})?' // 端口- :80 ,1-5位数字
　　+ '((/?)|' // url无参数结尾 - 斜杆或这没有
　　+ '(/[\\w_!~*\'()\\.;?:@&=+$,%#-]+)+/?)$';//请求参数结尾- 英文或数字和[]内的各种字符
　　const re = new RegExp(strRegex, 'i'); // 大小写不敏感
　　if (re.test(encodeURI(url))) {
　　　　return true;
　　}
　　return false;
}
