#!/bin/bash
pref=`date -d "3 hours ago" +%s%N | cut -b1-13`
today=`date +%s%N | cut -b1-13`
yesterday=`date -d "24 hours ago" +%s%N | cut -b1-13`
z="curl 'http://192.168.10.193:5601/elasticsearch/_msearch' -H 'Origin: http://192.168.10.193:5601' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.8' -H 'kbn-version: 5.1.1' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/51.0.2704.79 Chrome/51.0.2704.79 Safari/537.36' -H 'content-type: application/x-ldjson' -H 'Accept: application/json, text/plain, */*' -H 'Referer: http://192.168.10.193:5601/app/kibana' -H 'Connection: keep-alive' --data-binary \$'{\"index\":[\"log-2017.03.08\",\"log-2017.03.09\",\"log-2017.03.17\",\"log-2017.03.27\",\"log-2017.03.24\",\"log-2017.03.23\"],\"ignore_unavailable\":true,\"preference\":1497587056797}\n{\"size\":0,\"query\":{\"bool\":{\"must\":[{\"query_string\":{\"query\":\"*\",\"analyze_wildcard\":true}},{\"range\":{\"@timestamp\":{\"gte\":1466051315711,\"lte\":$today,\"format\":\"epoch_millis\"}}}],\"must_not\":[]}},\"_source\":{\"excludes\":[]},\"aggs\":{\"2\":{\"terms\":{\"field\":\"host.keyword\",\"size\":10,\"order\":{\"_count\":\"desc\"}}}}}\n' --compressed"
printf "#!/bin/bash\n"
echo $z > /home/rohit/Desktop/Priyanka/out.sh
/home/rohit/Desktop/Priyanka/out.sh >/home/rohit/Desktop/Priyanka/out.json
node /home/rohit/Desktop/Priyanka/net.js
