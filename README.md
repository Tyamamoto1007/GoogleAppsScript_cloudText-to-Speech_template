# GoogleAppsScript_cloudText-to-Speech_template
 
This code is a template to use "cloud Text-to-Speech" of GCP in Google Apps Script.
Request the text data defined by GAS to "cloud Text-to-Speech" by API, and save the output voice data in Google Drive.

Google Apps Script(GAS)でGoogle Cloud Platformの「cloud Text-to-Speech」をAPI利用するテンプレートです。
GASで定義したテキストデータをAPIでリクエストし、出力されたデータをデコードし、音声ファイルに変換、Google Driveに保存する処理を行います。

 
# DEMO
 
https://drive.google.com/open?id=1s8vYYfDbp7c7vjgegHzkHV2Gja-qxd6A

When this code is executed by Google Apps Script, it generates an audio file as shown in the link of Google Drive above by "cloud Text-to-Speech".

cloud Text-to-Speechによって、上記Google Driveのリンクにあるような音声ファイルを生成します。
 
# Features
 
It is a simple code that only requires API request of "cloud Text-to-Speech", decoding and saving to Google Drive.
Therefore, you can use "cloud Text-to-Speech" when you want to use it with Google Apps Script.
 
GCPの「cloud Text-to-Speech」のAPIリクエスト、デコード、Google Drive保存するだけのシンプルなコードです。
そのため、本コードをベースに"cloud Text-to-Speech"をGoogle Apps Scriptで音声合成のサービスを作り込むことができます。
 
# Requirement

* Issuing a GCP account(Google Cloud Platform用Googleアカウント登録)
* Enable "cloud Text-to-Speech" API("cloud Text-to-Speech"のサービスのAPI有効化)
* Manifest file settings(APIを利用するためのマニュフェストファイル修正)


# Installation
 
English
1. Paste this code into Google Apps Script.
1. Please enable the API of "cloud Text-to-Speech".
1. Add the following description in the manifest file "appsscript.json".
 
日本語
1. Google Apps Scriptにこのコードを張り付けて下さい。
1. "cloud Text-to-Speech"のAPIを有効化してください。
1. マニュフェストファイル「appsscript.json」で以下の記述を追加してください。
 
# Usage
 
If you execute the "generateSpeech" function on GAS, the audio file will be saved in Google Drive.

Google Apps Scriptのスクリプトエディタ上で"generateSpeech"を実行すると、音声ファイルがGoogle Driveに保存されます。
 
 
# Note
 
If you have a huge amount of text data or a lot of executions, you may be charged more than the "cloud Text-to-Speech" free tier.

膨大な量のテキストデータや、実行回数が多い場合、 "cloud Text-to-Speech"の無料枠を超え、課金される可能性があります。
 
# Author
 
* Tyamamoto100
* https://auto-worker.com/blog
* tyamamoto@try.main.jp
 
# License(ライセンス)
 
GoogleAppsScript_cloudText-to-Speech_template is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

このコードはMITライセンスに則り、自由に改変して利用できます。
