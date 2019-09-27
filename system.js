const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message' , message => {
  var prefix = "";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
 
 
 var prefix = ''; // your prefix
client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`ما يمديك تبند الشخص هذا لانه عنده خصائص اعلى منك شكرا لك`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`ما يمديك تبند الشخص هذا لانه عنده خصائص اعلى منك شكرا لك`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`ما يمديك تبنده لانه عنده ادمن ستريشن شكرا لك`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`ما اقدر ابند الشخص ذا عنده خصائص عاليه`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`تم تبنيد الشخص من سيرفر كينق دوم اي شكاوي تواصل مع الاداره`);
    }
});



client.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });







client.on('message',message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "افك") {
  let TT = message.content.split(" ").slice(1).join(" ");if(!TT) return message.channel.send(`**رجاء وضع اسم الروم الذي تريده افك*`)
  if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send('**😐 I Don\'t have premission**') 
  if(message.guild.afkChannelID == TT) return message.channel.send('**😐 This channel is a afk channel**');
  message.guild.setAFKChannel(TT,`By ${message.author.tag}`).catch(({}))
  message.channel.send('**✅ Done set the Afk Channel**');
  }
  if(command == prefix + 'لفل') {
    let TT = message.content.split(" ").slice(1).join(" ");if(!TT) return message.channel.send('**please select one of them `0,1,2,3,4`**')
    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send('**😐 I Don\'t have premission**') 
    message.guild.setVerificationLevel(TT,`By ${message.author.tag}`).catch(({}))
    .then(()=>message.channel.send(`**✅ Done set the Verification Level to ${message.guild.verificationLevel}**`))
  }
  if(command == prefix + 'صورة') {
    let TT = message.content.split(" ").slice(1).join(" ");if(!TT) return message.channel.send('**حط رابط الصوره الي تبي السيرفري يتغير لها**')
    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send('**😐 I Don\'t have premission**') 
    message.guild.setIcon(TT).catch(({}))
    message.channel.send(new Discord.RichEmbed().setTitle('**✅ Change the server photo to:**')
    .setImage(TT)).catch(mystey =>{message.channel.send('**The photo link is wrong :x:**')})
  }
 if(command == prefix + 'اسم') {
  let TT = message.content.split(" ").slice(1).join(" ");if(!TT) return message.channel.send('**WEEEED**')
  if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send('**😐 I Don\'t have premission**') 
  message.guild.setName(TT,`By ${message.author.tag}`).catch(({}))
  message.channel.send(`**✅ Chaning the Server Name To \`${TT}\`**`)
 }
});


client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});


client.on('message',message =>{
let command = message.content.split(" ")[0];
if (command == prefix + "الاسم") {
if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`You Don't has premisson`)
if(!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`**I Don\'t have \`MANAGE_NICKNAMES\` Permission**`)
var user = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
let MrNono = message.content.split(" ").slice(2).join(" ");
if(!user) return message.channel.send(`**:rolling_eyes: I can't find this member**`);
if(!MrNono) {
user.setNickname("",`By : ${message.author.tag}`)
.catch(MrNoNo =>{});
return message.channel.send(`**✅ ${user}'s nick has been reset.**`);
}user.setNickname(MrNono,`By : ${message.author.tag}`)
.catch(NoNo =>{});
message.channel.send(`✅ Done changed ${user} nickname to **\`${MrNono}\`**`);}});




const ytScraper = require("yt-scraper"); // npm i yt-scraper
client.on('message', message => {
    if (message.content.startsWith(prefix + 'يوتيوب')) {
      let args = message.content.split(" ").slice(1).join(" ");
      if(!args) return message.channel.send(`:rolling_eyes: **please type the channel link**`)
      if(!args.includes("https://www.youtube.com/channel/")) return message.channel.send('**I Can\'t find This Channel 💢**')
    ytScraper.channelInfo(`${args}`).then(yt => {
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(`**\`${yt.name}\`**'s channel Info`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/595057510436831252/youtube.png`)
        .addField(`**Subscribers**`, `${yt.subscribers}`,true)
        .addField(`**Views**`, `${yt.views}`,true)
        .addField(`**Created In**`, `${yt.joined}`,true)
        .addField(`**URL**`, `[__Click Here__](${yt.url})`,true)
        .addField(`**Description**`, `\`\`\`${yt.description}\`\`\``,true)
        .setFooter(`Requested by ${message.author.tag}`,message.author.avatarURL)
        .setTimestamp()
  message.channel.send({embed});
 
    })
}
});


  
  


const devs = ["",""]
 
const adminprefix = "k";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/KINGDOM");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });
  
  
  ﻿﻿client.on("message", message => {
if(message.content.startsWith(prefix + "صورته")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} 
});

// لازم تمتب الامر بعدين تمنشن الرتبه  
 
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bcdks;fksdfkc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `$rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
	
client.on("message", message => {
    var prefix = "$";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("bc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(':white_check_mark:| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField(':hotsprings:| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
            .addField(':pencil:| الرسالة ', args)
            .setColor('RANDOM')
            message.channel.sendEmbed(AziRo);
        }
        } else {
            return;
        }
    });

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اعطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField(' - السيرفر',message.guild.name,true)
    .addField(' - تم اعطائك ميوت بواسطة',message.author,true)
    .addField(' - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {  // Toy7rrrrB
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // Toy7rrrrB
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => { // Toy7rrrrB
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // Toy7rrrrB
  }
});

client.on('message', rw => {
  if (rw.content.startsWith('سجن')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author 
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**<@${men.id}>
تم تبنيدك من الرومات لا تستطيع الدخول الان خل الزحف ينفعك
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED//تم تبنيدك من الرومات لا تستطيع الدخول الان خل الزحف ينفعك
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه//
client.on('message', rw => {
  if (rw.content.startsWith('فك السجن')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>//WEEEED 
 Welcome Back
Back With : <@${rw.author.id}> **`) 
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed) 
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL) 
.setDescription(`          <@${men.id}>
حياك الله انفك عليك باند الفويس
With : <@${rw.author.id}>//اتمنى ماتخرب
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
})	
	
	

const { getInfoFromName } = require('myanimelists');
 
 
          client.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'انمي')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: !anime dragon ball')
            getInfoFromName(anime)  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)  
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
             }})




client.on('guildMemberAdd', member => {
var channel = member.guild.channels.find('name', 'welcome');
    if(!channel) return;
channel.send('**Welcome** ' + `${member}` + ' **To** ' + `__${member.guild.name}__` + ' **Server KINGDOM** ')          
 
})


client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith('بنق البوت')) { // حقوق مداكس تو
        if (message.author.bot) return;
        if(!message.channel.guild) return;
        var Bping =`${Math.round(client.ping)}` // Mdax77x CopyRight | Toxic Codes
                const E1ping = new Discord.RichEmbed()
        .setTitle('ــــــــــــــــــــــــــــــ')
        .addField(`**BOT Ping Is** :__${Bping}📶__`,"ــــــــــــــــــــــــــــــ")
        .setFooter(`Requested by | ${message.author.tag}`) // حقوق مداكس
        .setColor('RANDOM')
        message.channel.send(E1ping);
    }
});



client.on('message',message =>{ // MdAx77x CopyRght
    if(!message.channel.guild) return;
if(message.content =='الاعضاء') // Mdax77x | Toxic Codes CopyRight
var E2Mdax = new Discord.RichEmbed()
 
.setTitle('==========` اعضاء كينق دوم `==========')
.addField('** اعضاء سيرفر كينق دوم.:**',`__** [ ${message.guild.memberCount} ]**__`,true) // Mdax77x | Toxic Codes CopyRight
.addField('📗|اونلاين',` ${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📓| اوفلاين',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`) // Mdax77x | Toxic Codes CopyRight
.setFooter(`Requested By | ${message.author.tag}`) // Mdax77x | Toxic Codes
.addField('**by : WEEEED.KINGDOM**',true)
.setColor('RANDOM')
message.channel.send(E2Mdax);
});




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('اسم الشخص الي خش السيرفر كينق دوم',`${member}`)
        .addField('``` Welcome To Server KINGDOM ```' , `Welcome to the server, ${member}`)
        .addField('الايدي لشخص الي خش سيرفر كينق دوم', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم بكينق دوم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' KINGDOM', `${member.guild.name}`,true)
                                       
     .setFooter("**WEEEED.KINGDOM **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
	
	
	
	
	client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Citizen"));
    });
	




client.on('message',function(message) {
    if(!message.channel.guild) return undefined;
    const swearWords = ["كسمك","كسختك","انيك امك","انيك اختك","على زبي","مص زبي","انتي قحبه","انت قحبه","جرار","بنيكك"];
    if (swearWords.some(word => message.content.includes(word)) ) {
      message.delete()
      message.reply("**استحى على وجهك عشان ويد مايطيرك باند**"); 
    }
  });
  
  
  
client.on("message", message => {
    var prefix = "";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + "اسحب")) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسحب [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد سحبت <@${usermentioned}>`)
var embed = new Discord.RichEmbed()
.setTitle(`لقد تم سحبك ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> لقد تم سحبك الى الروم!
Server --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 
 
 
 
 client.on('message', async message => {
var prefix = '' /// البريفكس هون غيره يا بعد قلبي
if(message.content.startsWith( prefix + 'مين جبت')) { //// وهون الامر طبعا
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**عدد الدعوات للسيرفر**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تاريخ انضمامك لسيرفرنا **', `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]`)
            .addField('**رابط الدعوة الذي دخلت منه**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});


    let lastSeenInVoiceChannel = {};
    client.on("voiceStateUpdate", (oldMember, newMember) => {
        if(!newMember.voiceChannel) {
            lastSeenInVoiceChannel[newMember.id] = {
                time: (new Date).getTime()
            }
        }
    });
   client.on('message', message => { // مثل مانعروف ايفينت الرسالة
      var prefix = "!" // البادئة تقدر تغيرها او تخليها اذا كنت مخلي بادئة من قبل تقدر تحذف هذا السطر
      if(message.content.startsWith(prefix + "user")) {// اذا كانت الرسالة مبدوءة ب
        var lastJ; // تعريف ماله داعي انك تعرف وش يسوي
        if(!lastSeenInVoiceChannel[message.author.id]) { // هنا اذا كان الشخص داخل الحين للفويس شانل او ماكن دخل من لحظة اشتغال البوت
            if(message.member.voiceChannel) lastJ = `${message.author.tag} is ONLINE IN \`${message.member.voiceChannel.name}\``; // هنا يقله انت موجود في الشانل ويعطيه اسم الشانل
            else lastJ = `${message.author.tag} , You din't join the voice chaneel when i ran yet`; // هنا اذا ماكان داخل من لحظة اشتغال البوت للفويس شانل
       } else lastJ =  Math.floor(((new Date).getTime() - lastSeenInVoiceChannel[message.author.id].time) / 1000 / 60 / 60) + " hour(S) " + Math.floor(((new Date).getTime() - lastSeenInVoiceChannel[message.author.id].time) / 1000 / 60 ) + " minute(S) " +  Math.floor(((new Date).getTime() - lastSeenInVoiceChannel[message.author.id].time) / 1000) + " second(S) AGO"
           return message.channel.send(`${lastJ}`); // Dr.EbnEalMosul
   } // Codes
   });// ALL RIGHTS RESERVED TO [CODES / DR.EBNEALMOSUL]
   
   
   
   client.on("message", async (message) => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  let prefix = "";
  if (args[0] == `${prefix}cr`) {
    if (!message.guild.me.hasPermission("MANAGE_ROLES") || !message.member.hasPermission("MANAGE_ROLES")) return;
    if (!args[1] || !args[2]) return message.reply(`Usage: ${args[0]} [role color] [role name]
Example: ${args[0]} blue Admin`);
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null
      });
      await message.reply(`Done, Created **${role.name}** role!`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});


var prefix= "";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'createt')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
  
  



client.on('message', message => { 
    var prefix = "";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('حط منشن الشخص بعدين الرتبه الي تبيه تعطيه و ماراح تعطي الا اقل من رتبتك').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('تم اعطاء الرتبه لشخص').then(msg => {msg.delete(10000)});
    }
    });


client.on('message', message => { 
    var prefix = "";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('حط منشن الشخص بعدين الرتبه الي تبيه تعطيه و ماراح تعطي الا اقل من رتبتك').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('تم اعطاء الرتبه لشخص').then(msg => {msg.delete(10000)});
    }
    });


client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`Bot KINGDOM ComingSoon Codes by  WEEEED.`,"http://twitch.tv/KINGDOM")
    client.user.setStatus("dnd")
 });
 
 

client.on('message',message =>{
if(!message.guild) return;
if(message.author.id == client.user.id) return;
var log = message.guild.channels.find(c => c.name === 'log_text');
if(!log) return;
if(message == '') return;
log.send(`> **#${message.channel.name} \`>\` ${message.author.tag}**: ${message}`)
});


client.on('message' , async message => {
            if(message.content.startsWith(prefix + "اعلان")) { //Toxic Codes
     await message.channel.send("`ارسال الرساله .`").then(e => { //Toxic Codes
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })//Toxic Codes
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");//Toxic Codes
if(co.first().content > 1000081 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`") //Toxic Codes
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`") //Toxic Codes
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }) //Toxic Codes
.then(col => { //Toxic Codes
  channel = col.first().content 
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => { //Toxic Codes
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel) //Toxic Codes
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
}) //Toxic Codes
})
}) //Toxic Codes
        
}) 
}
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("حط عدد رسائيل الي تبي تطيرها").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات: " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});


client.on('message', message => {
    if (message.content === "حسابي") {
    var year = message.createdAt.getFullYear()
    var month = message.createdAt.getMonth()
    var day = message.createdAt.getDate()
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
        .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
          .setThumbnail(message.author.avatarURL)
                   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
      .addField('الكود الخاص بك:', message.author.discriminator)
      .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
        .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
            .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
    
      message.channel.send({embed});
        }
    });

client.on('message', message => {

    if(message.content === prefix + "kmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **ماعندك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم تقفيل شات كينق دوم**")
           });
             }
//FIRE BOT
 if(message.content === prefix + "kunmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ماعندك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**تم فتح شات كينق دوم**")
           });
             }
             
      
    
});

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة الصراحه فعاليات كينق دوم .")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/624733864375484456/625497437582262272/kd2.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});

client.on('message', message => {
    if (message.content.startsWith("avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


	 
client.login(process.env.BOT_TOKEN)