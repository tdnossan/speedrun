# RTA前の準備

## Any%のルール

[:octicons-link-external-16: Speedrun.comのカドゥケウスZのルール](https://www.speedrun.com/tcso?h=Normal-wii-wiiu&rules=game&x=q2563gko-onv5j9wl.qyzned31)より（カドゥケウス NEW BLOODでもルールは同じ）。

1. ゲーム開始時の「このゲームはフィクションです——」が消えてから、エピローグのSkip表示が消えるまでを計測する
1. タイム計測にはLiveSplit等の外部タイマーを利用する
1. 一部のステージだけ難易度を上げてプレイしてもよい（Z・NB共にタイムが早くなるシーンが存在する）
1. ゲームのサウンドはノイズにまみれていなかったり極端に音量が低くないなど視聴に耐えうる品質が必要
1. ゲームのサウンド設定はボイスのみOFFにすることができる
1. 公式のハードウェア（WiiまたはWiiU）とソフト（コピー等ではない正規品のディスク）でのプレイが必要で、USBやSDからゲームデータをロードするプレイは認められない
1. HomeBrew経由でゲームディスクをロードすることは可能だが、公正なロード時間を確保するためにHomeBrew Game Loaderガイドを参照して行うこと（リージョンロック回避がおもな目的）

## 言語によるプレイ時間差

言語によるロード時間の差は1～2秒程度なので、どの言語でプレイしても問題ありません。

~~日本語版を利用したほうが最終的に25～30秒の短縮になります。~~

~~[:octicons-link-external-16: TCSO Speedrun Guide | Speedrun Guide to Trauma Center: Second Opinion](https://leokeidran.github.io/tcso/)~~

## 本体によるロード時間の差

[:octicons-link-external-16: Wii本体の内部チップによってロード時間が変わるので、判明分をまとめてみた](https://iid01.com/wii_load_time/)

こちらの記事を参考に、初期生産（2006年12月）のWii、後期生産（2009年8月）の黒Wii、WiiUの3台でロード時間を計測しました。

<iframe width="560" height="315" src="https://www.youtube.com/embed/oostl0hSpUI?si=2I4P8rGTZEy9fBTX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

結論から書くと、**WiiUが最も速く**、次に後期生産の黒Wii、そして初期生産のWiiが最も遅いという結果でした。

### カドゥケウス NEW BLOOD

ADVパートからエピソードセレクト画面に戻るまでが最も差が大きく、WiiUと初期Wiiでは約1.4秒もの差が発生しました。

それ以外のADVパート中もWiiUが最も速く、次に黒Wii、その次に初期Wiiでしたがそれぞれの差は数フレームに収まっています。

手術パートに関しては術野の遷移時に特殊なデータ読み込み方法を行っているのか、ロードが早いはずのWiiUが最も遅くなったり、ロードが遅いはずの初期Wiiが最も早かったりと安定しませんでした。  
※DVDメディアのシークタイムの差のせいかも知れませんが調査する術がありません

手術パートのロード時間の不安定さについては原因不明ですが、とりあえずはWiiUでプレイすれば問題ないと思います。


### カドゥケウスZ

パートボイスを採用しているためかロード時間は全体的に短めで、機種感の差はほぼ発生しませんでした。

明確に差が発生したのは手術開始時のロード時間で、ここだけ初期Wiiが他2機種に比べて0.2秒ほど遅かったです。

それ以外のパートについては1～2フレームのほぼ誤差レベルな上、NEW BLOODでも発生していた初期Wiiのロードが速くなる現象も発生しました。

### 本体について

とりあえずはWiiUまたは後期Wiiでプレイすれば問題ないと思います。

さらにWiiUにはHDMIで出力する機能が備わっているので、サードパーティから販売されているWii用のHDMI変換アダプタを用意する必要がありません。

## オートセーブを無効化する

カドゥケウス NEW BLOODはオートセーブを強制されますが、**Wii本体の保存容量をその他のデータで埋めることで**オートセーブを無効化することができます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/LKN2ZTwlJCg?si=qucuk1mV7Usb9SNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ただし、現在は下記理由により**正規の方法で**保存容量を埋めることは困難になっています。

1. 異なる本体で購入したゲームは別の本体へコピーできない
2. 一度も遊んだことがないゲームのセーブデータは本体へコピーできない
3. Wiiのショッピングチャンネルはすでにサービスが終了している
