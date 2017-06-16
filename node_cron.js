var cron = require('node-cron');
 var exec = require('child_process').exec;
var cmd = './main.sh';

cron.schedule('10 20 * * *', function(){
exec(cmd, function(error, stdout, stderr) {
});
});
