window.onload=function() {
    var a,b,c,arr=[],narcissus,
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    btn1.onclick=function(){
        for(c=1;c<10;c++){
            for(b=0;b<10;b++){
                for(a=0;a<10;a++){
                    var num,sum;
                    num=c*100+b*10+a;
                    sum=c*c*c+b*b*b+a*a*a;
                    if(num==sum){
                        arr.push(num);
                        num=null;
                        sum=null;
                    }
                }
            }
        }
        // alert(arr);
        narcissus=arr.join(",");;
        rst.innerHTML=narcissus;
        arr=[];
    };

    btn2.onclick=function(){
        rst.innerHTML="";
    }

};