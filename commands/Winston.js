module.exports.run = async (client, message, _args, _level) => { // eslint-disable-line no-unused-vars
    const msg = await message
      .channel
      .send('\`Loading.\`')
      msg.edit('\`Loading..\`')
      msg.edit('\`Loading ...\`')
      msg.edit('\`Loading ....\`')
      msg.edit('\`Loading .....\`')
      msg.edit('*Hayatım Kadar Renkli Olmasada* *\`Winston Rework\`.*')

  };
  
  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 'User',
  };
  
  module.exports.help = {
    name: 'winston',
    category: 'Miscelaneous',
    description: 'It pings Q, the supernatural being from Star Trek....think we have a script mixu' +
        'p',
    usage: 'Hey Q!',
  };
  