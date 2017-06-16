var jsonFile = require('jsonfile')
var rn = require('random-number');
var fileName = '/home/rohit/Desktop/Priyanka/out.json'
var body = "";
var options = {
  min:  10000
, max:  99999
, integer: true
}
jsonFile.readFile(fileName, function (err, jsonData)
{
  if (err) throw err;

  for (var i = 0; i < jsonData.responses.length; ++i)
  {
    body = body + "<html><head><style> table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } tr:nth-child(even) { background-color: #dddddd; } </style></head><body>\n";
    var total_hits = jsonData.responses[i].hits.total;
    if (total_hits > 500)
    {
      body = body + "<table><tr><th>IP</th><th>Count</th></tr>";
      var uk = Object.keys(jsonData.responses[i].aggregations); 
      for (var j = 0; j < jsonData.responses[i].aggregations[uk].buckets.length; ++j)
      {
        body = body + "<tr><td>" + jsonData.responses[i].aggregations[uk].buckets[j].key + "</td>";
        body = body + "<td>" + jsonData.responses[i].aggregations[uk].buckets[j].doc_count + "</td></tr>\n";
      }
      body = body + "</table></body></html>";
      console.log(body);
      var nodemailer = require('nodemailer');

      var transporter = nodemailer.createTransport(
      {
        service: 'gmail'
        , auth:
        {
          user: 'youremailid@gmail.com'
          , pass: 'nodejs123'
        }
      });

      var mailOptions = {
        from: 'youremailid@gmail.com'
        , to: 'youremailid@gmail.com'
        , subject: 'Notification ['+rn(options)+']: Numbers' 
        , html: body
      };

      transporter.sendMail(mailOptions, function (error, info)
      {
        if (error)
        {
          console.log(error);
        }
        else
        {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  }


});

