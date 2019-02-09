window.onload=function() {
    var a,b,c,i,num,sum,narcissus,arr=[],
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    btn1.onclick=function(){
        for(i=100;i<999;i++){
            num=i.toString();
            a=num.substring(0,1);
            b=num.substring(1,2);
            c=num.substring(2,3);
            sum=a*a*a+b*b*b+c*c*c;
            if(num==sum){
                arr.push(i);
            }else{
            }
        }
        narcissus=arr.join(",");
        rst.innerHTML=narcissus;
        arr=[];
    };

    btn2.onclick=function(){
        rst.innerHTML="";
    }
};