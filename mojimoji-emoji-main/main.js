
setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /お願い致します/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /お願いいたします/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /お願いします/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /よろしくお願い致します/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /よろしくお願いいたします/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /よろしくお願いします/g, "&#128583;");
    }, 300); 
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /トマト/g, "&#127813;");
    }, 300);
    setTimeout( function(){
     document.body.innerHTML = document.body.innerHTML.replace( /バラ/g, "&#127801;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /桜/g, "&#127800;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /イチゴ/g, "&#127827;");
    }, 300);  
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /メロン/g, "&#127816;");
    }, 300);  
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /リンゴ/g, "&#127822;");
    }, 300);  
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /ナス/g, "&#127814;");
    }, 300);  
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /サクランボ/g, "&#127826;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /モモ/g, "&#127825;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /キュウリ/g, "&#129362;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /ピーマン/g, "&#129745;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /ジャガイモ/g, "  &#129364;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /タマネギ/g, "&#129477;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /トウモロコシ/g, "&#127805;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /スイカ/g, "&#127817;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /ニンジン/g, "&#129365;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /ブロッコリー/g, "&#129382;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /研究職/g, "&#129404;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /合格/g, "&#127841;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /選考結果/g, "&#127842;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /おめでとう/g, "&#127874;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /夏/g, "&#127847;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /秋/g, "&#127792;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /冬/g, "&#127877;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /インターン/g, "&#127922;");
    }, 300);    
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /面接/g, "&#127919;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /テスト/g, "&#128187;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /就職活動/g, "&#129489;&#8205;&#128188;");
    }, 300);
    setTimeout( function(){
      document.body.innerHTML = document.body.innerHTML.replace( /就活/g, "&#129489;&#8205;&#128188;");
    }, 300);
    setTimeout( function(){
      cnt1 = (document.body.innerHTML.match( /。/g) || []).length
      for (let i = 1; i <= cnt1; i++) {
        if ((i % 2) != 0) {document.body.innerHTML = document.body.innerHTML.replace("。", "&#129401;");} // パァ
        else {document.body.innerHTML = document.body.innerHTML.replace("。", "&#128151;");}
      }
      cnt2 = (document.body.innerHTML.match( /\<br\>/g) || []).length
      for (let i = 1; i <= cnt2; i++) {
        if ((i % 2) != 0) {document.body.innerHTML = document.body.innerHTML.replace("<br>", "&#x1f647;<p style='margin:0;'></p>");} // パァ
        else {document.body.innerHTML = document.body.innerHTML.replace("<br>", "&#8252;&#65039;<p style='margin:0;'></p>");}
      }
      document.body.innerHTML = document.body.innerHTML.replace( /、/g, "&#x2728;");
    }, 300); 