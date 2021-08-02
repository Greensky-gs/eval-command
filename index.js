const Discord = require('discord.js');

const client = new Discord.Client();

const configs = {
  prefix: '!',
  token: 'The token of your bot'
};

client.on('message', (message) => {
  var args = message.content.slice(configs.prefix.length).trim().split(' ');
  const commandName = args.shift();
  
  if (!message.content.startsWith(configs.prefix) || message.author.bot) return;
  if (message.author.id === 'your id' && commandName === 'eval') {
    const content = args.join(' ');
    const result = new Promise((resolve, reject) => resolve(eval(content)));
    return result.then((output) => {
      if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
      if (output.includes(token)) output = output.replace(token, 'T0K3N');
            
      message.channel.send(output, { code: 'js' });
      }).catch(err => {
        if (err) {
          err = err.toString();
          if (err.includes(token)) err = err.replace(token, '`T0K3N`');
          return message.channel.send(err, { code: 'js' })
        }
     });
  }
});
