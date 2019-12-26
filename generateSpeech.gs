function generateSpeechToDrive() {
  
  //音声出力したいテキストデータと出力する音声データのファイル名を定義します。
  var speechText ="ここに日本語テキストを入力してください";
  var name = "test.mp3"
  
  //cloudText-to-SpeechにAPIでリクエスト時に送るjsonを定義します。
  //synthesizeメソッドで使うパラメータはhttps://cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize?hl=jaを参照してください。
  var json = {
    "audioConfig": {
      "audioEncoding": "MP3",
      "pitch": "0.00",
      "speakingRate": "1.00"
    },
    "input": {
      "text": speechText
    },
    "voice": {
      "languageCode": "ja-JP",
      "name": "ja-JP-Wavenet-A"
    } 
  }
  
  //APIリクエストするためのペイロードやURL、ヘッダー情報を定義します。
  var payload = JSON.stringify(json);
  var url = "https://texttospeech.googleapis.com/v1beta1/text:synthesize";
  var headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + ScriptApp.getOAuthToken(),
  };
  
  //APIをポストするためのオプションを定義し、URLフェッチを行います。
  var options = {
    "method": "post",
    "headers": headers,
    "payload": payload,
  };
  var data = UrlFetchApp.fetch(url, options); 
  
  //取得したJSONデータをパースして取り扱えるようにします。
  var talkData =JSON.parse(data);
  
  //BASE64のデータとなっているので、デコードを行い、音声ファイルに変換します。
  var decoded = Utilities.base64Decode(talkData.audioContent);
  
  //デコードした音声データを音声用のBLOB形式に変換し、GoogleDriveに保存します。
  var blob = Utilities.newBlob(decoded, "audio/mpeg", name);
  DriveApp.createFile(blob);

}
