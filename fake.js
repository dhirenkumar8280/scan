(function(){
var config={"apiKey":"AIzaSyD-fakeAPIKEY1234567890abcDEF","authDomain":"myapp.firebaseapp.com","databaseURL":"https://myapp.firebaseio.com","projectId":"myapp","storageBucket":"myapp.appspot.com","messagingSenderId":"1234567890","appId":"1:1234567890:web:abc123def456ghi789"};

const AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE";const AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

var stripe={pub:"pk_test_1234567890abcdef",secret:"sk_test_4eC39HqLyjWDarjtT1zdp7dc"};let slackToken="xoxb-123456789012-0987654321098-AbCdEfGhIjKlMnOpQrStUvWx";

function connectToGitHub(){const GITHUB_TOKEN="ghp_abcd1234efgh5678ijkl9012mnop3456qrst";return fetch("https://api.github.com/user/repos",{headers:{"Authorization":"token "+GITHUB_TOKEN}}).then(r=>r.json())}

let loginCreds={"username":"admin","password":"pa$$w0rd123"};

var jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakePayload.FAKE_SIGNATURE";

let dropboxConfig={"access_token":"sl.ABCDefghIjklMnopQRStuvWXyz1234567890"};

function makeRequest(endpoint){return fetch(endpoint+"?api_key="+config.apiKey+"&token="+jwt).then(res=>res.json()).then(console.log)}

function initApp(){connectToGitHub();makeRequest("https://api.example.com/user/data");console.log("App initialized")}

let buriedSecrets=[{env:"dev",key:"dev-APIKEY-xyz123"},{env:"prod",key:"prod-KEY-098abcDEF"},];
for(let i in buriedSecrets){console.log("Loaded key for "+buriedSecrets[i].env)}

let headers={"x-api-key":"12345-abcde-SECRET-key-09876","Authorization":"Bearer "+dropboxConfig.access_token};

let smtpConf={"host":"smtp.mailtrap.io","port":2525,"user":"user1234","pass":"smtpPassFAKE"};

(function obf(){var a="token=",b="1234567890abcdef1234567890abcdef",c=a+b;window.fakeToken=c})()

window.globalKeys={"twilio":"TWILIO-FAKEKEY-abcdef123456","sendgrid":"SG.fakeSendGridKEY.abcdef1234567890"};

console.log("Stripe Secret: "+stripe.secret);initApp();
})();
