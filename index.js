const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'      
const developers = ["698830615671210024"]


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});






 

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;   
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {   
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`**\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المرسل لهم**`); 
  message.delete();
  };
  });



  client.on("message", message => {  
   
              if (message.content.startsWith(prefix + "bc")) {   
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; 
    let args = message.content.split(" ").slice(1);  
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  
   m.send(`${argresult}\n ${m}`);   
  })
   message.channel.send(`**\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المرسل لهم **`); 
   message.delete(); 
  };     
  });



  client.on('message', msg => {
    if(msg.content.startsWith(prefix + "help")) {
    msg.reply('تم إرسال الأوامر إلى الخاص :white_check_mark: **تأكد أن الخاص مفتوح أيضاً**') 
    };
  });

  
  
  client.on("message", message => {
    if(message.content.startsWith(prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#0x2F3136")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**قائمة الأوامر
  
       ${prefix}obc | لأرسال برود كاست للكل  

       ${prefix}bc  |  لأرسال برود كاست للأونلاين

       ${prefix}setg | لتغير حالة اللعب

       ${prefix}setw | لتغير حالة المشاهدة

       ${prefix}setl | لتغير حالة الأستماع

       ${prefix}sets | لتغير حالة البث

       ${prefix}setname | لتغير أسم البوت

       ${prefix}setava | لتغير صورة البوت

      Youtube: https://www.youtube.com/channel/UCMMBO2oYRzM1fz_yAwqgnIQ?view_as=subscriber
       ** `)
   message.author.sendEmbed(embed)
   }
   });


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setw')) { 
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");  
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`تم تغير الإسم إلى ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`تم تغير الإسم إلى :**${argresult}** `);
}
});

require('./server')();
client.login('NzM5NDA5NjUwOTc3NDcyNTY1.XyaC5g.xLY5YFUHTNrB8U3LvdM7DzBOnTA');
