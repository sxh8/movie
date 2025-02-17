(function () {
    function IsPC() {
        var userAgentInfo = window.navigator.userAgent;
        var flag = true;
        if (userAgentInfo.indexOf('Mobile') != -1 || screen.width <= 750) {
        flag = false;
        
        }
        return flag;
    }
    function insertAftertf(new_item, item) {
        item.parentNode.insertBefore(new_item, item.nextSibling);
    }
    var dom=document.getElementById('fixedtopid');
    var data=document.getElementById('fixedtopid').getAttribute('data');
    if(dom){
        if(IsPC()){
            var newdoms=document.createElement('script');
            newdoms.src='//pc.stgowan.com/pc_w/m_top_fixed.js';
            newdoms.id='fixedtoptf'; 
            newdoms.setAttribute('data',data);
            insertAftertf(newdoms,dom)
        }
    }
})()