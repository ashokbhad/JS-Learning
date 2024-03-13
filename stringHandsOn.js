function stringHandsOn()
{ 
    console.log("%c======== Sting Hands On Assignment ========", "color: purple");

    console.log("%c====== Step 1: =======", "color: pink");
    var str="    Hey you are doing good, keep it up    ";
    console.log(`Given string is                 :  ${str}`);    
    var len=str.length;

    console.log("%c====== Step 2: =======", "color: pink");
    console.log(`Length of string is             :  ${len}`);
    var strTrim=str.trim();

    console.log("%c====== Step 3: =======", "color: pink");
    console.log(`String after Trim               : ${strTrim}`);
    var strTrimLength=strTrim.length;

    console.log("%c====== Step 4: =======", "color: pink");
    console.log(`All No. of extra spaces         : ${len-strTrimLength}`);

    console.log("%c====== Step 5: =======", "color: pink");
    console.log(`First char. after trim          : ${strTrim.charAt(0)} , Last character after trim ${strTrim.charAt(strTrimLength-1)}`);
    var totalWord=strTrim.split(" ");

    console.log("%c====== Step 6: =======", "color: pink");
    console.log(`All No.r of word after trim     : ${totalWord.length}`);

    console.log("%c====== Step 7: =======", "color: pink");
    console.log(`Index of word "good" is         : ${str.indexOf('good')}`);

    console.log("%c====== Step 8: =======", "color: pink");
    console.log(`Substring starting from index 22: ${str.substring(22,str.length)}`);

    console.log("%c====== Step 9: =======", "color: pink");
    console.log(`String end with "up" after trim : ${strTrim.endsWith('up')}`);

    console.log("%c===== Step 10: =======", "color: pink");
    console.log(`Str start with "Hey" after trim : ${strTrim.startsWith('Hey')}`);
}
stringHandsOn();
