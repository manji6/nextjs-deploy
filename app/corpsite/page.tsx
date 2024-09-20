"use client";
import Image from "next/image"


export default function Page() {
  return (
    <div>
      <div className="container max-w-full pb-5">
        {/* Hero Container */}
        <div className="hero bg-base-200 min-h-64 shadow shadow-2xl rounded-lg">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <img
                src="/assets/ugwork_logo.png"
                alt="UG WORK 合同会社 ロゴ"
                className="py-5"
              />
              <p className="py-6">
                UG WORKは博覧会などの大型イベントや展示・集客施設 、イベントを活用したまちづくりなどの企画とプロデュースをしています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-full bg-white rounded-lg mb-5">
        <h2 className="p-5 text-2xl font-extrabold">UG WORKについて</h2>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">UG WORKの業務</h3>
          <p>博覧会などの大型イベントや展示・集客施設 、イベントを活用した
            まちづくりなどの企画とプロデュースをしています。</p>
        </div>
        <div className="p-5">

          <h3 className="text-xl font-extrabold">UG WORKの名称</h3>
          <p>UG WORKはUpGrowth（成長）な作品や仕事を志すことを名称にしました。
            また、澤田個人の活動ベースとなる会社なので
            澤田の仕事という意味で澤田の名前「ユウジ」の音から
            UGのWORKでもあります。</p>
        </div>
        <div className="p-5">

          <h3 className="text-xl font-extrabold">UG WORKのマークについて</h3>
          <p>デザインをしていただいたWALTZ.さんが
            「博覧会などの各種大型イベントの企画・プロデュースをされることから、
            いろいろな形のものを包み込むことのできる風呂敷を広げる様子を
            シンボルマークにしています。」ということで、
            風呂敷をイメージしたマークになりました。</p>
        </div>
      </div>

      <div className="container max-w-full bg-white rounded-lg mb-5">
        <h2 className="p-5 text-2xl font-extrabold">プロフィール</h2>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">澤田裕二</h3>
          <p>イベント・空間メディアプロデューサー<br />
            UG WORK 合同会社 代表</p>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th className="pl-0">1957年</th>
                  <td>東京生まれ</td>
                </tr>
                <tr>
                  <th className="pl-0">1980年</th>
                  <td>明治大学工学部建築学科 卒業</td>
                </tr>
                <tr>
                  <th></th>
                  <td>有限会社SD設計室入社</td>
                </tr>
                <tr>
                  <th className="pl-0">1988年</th>
                  <td>株式会社SDへ改組 取締役 就任</td>
                </tr>
                <tr>
                  <th className="pl-0">1996年</th>
                  <td>株式会社SD代表取締役社長 就任</td>
                </tr>
                <tr>
                  <th className="pl-0">2019年</th>
                  <td>UG WORK合同会社を起業し代表就任</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div className="container max-w-full bg-white rounded-lg mb-5">
        <h2 className="p-5 text-2xl font-extrabold">主な仕事</h2>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">都市施設</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th className="pl-0">二子玉川ライズ×多摩美術大学<br />地域連携アートプロジェクト「タマリバーズ」</th>
                  <td>2011年〜現在</td>
                  <td>プロデューサー、コーディネーター</td>
                </tr>
                <tr>
                  <th className="pl-0">二子玉川ライズコレクション</th>
                  <td>2011年</td>
                  <td>プロデューサー</td>
                </tr>
                <tr>
                  <th className="pl-0">二子玉川ライズオープニングイベント</th>
                  <td>2011年</td>
                  <td>プロデューサー</td>
                </tr>
                <tr>
                  <th className="pl-0">グランフロント大阪 ナレッジキャピタル<br />「フューチャーライフショールーム」</th>
                  <td></td>
                  <td>基本構想、基本計画</td>
                </tr>
                <tr>
                  <th className="pl-0"> 都市型現代アートセンター</th>
                  <td></td>
                  <td>基本構想、基本計画</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">博覧会・大型イベント</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th className="pl-0">第35回全国都市緑化やまぐちフェア 「山口ゆめ花博」</th>
                  <td>2018年 9月〜11月</td>
                  <td>プロデューサー</td>
                </tr>
                <tr>
                  <th className="pl-0">えひめさんさん物語(愛媛県)</th>
                  <td>2019年9月〜11月 開催</td>
                  <td>総合プロデューサー</td>
                </tr>
                <tr>
                  <th className="pl-0">2020年ドバイ国際博覧会基本計画</th>
                  <td>2017年度〜2020年度</td>
                  <td>検討会委員会 委員(経済産業省)</td>
                </tr>
                <tr>
                  <th className="pl-0">2025年日本国際博覧会(大阪・関西万博)</th>
                  <td>2016年度〜現在</td>
                  <td><p>［2016年度］</p>
                    <p>基本構想検討会議委員/理念・事業部会長（大阪府）</p>
                    <p>［2016年度〜2018年度］</p>
                    <p>2025年国際博覧会検討会議委員（経済産業省）、大阪府・大阪市特別顧問、招致委員会有識者委員</p>
                    <p>［2018年度〜2019年度］</p>
                    <p>2025年大阪・関西万博具体化検討会、ワーキング委員（経済産業省）</p>
                    <p>［2019年度〜］</p>
                    <p>大阪・関西万博におけるパビリオン等地元出展に関する有識者懇話会 委員」</p>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">技能五輪国際大会(2023年大会)</th>
                  <td>2017年度〜2019年</td>
                  <td>
                    <p>誘致検討委員会委員（厚生労働省）</p>
                    <p>検討ワーキング委員（厚生労働省・JAVADA）</p>
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">TOKYO ART FLOW 00</th>
                  <td>2016年</td>
                  <td>
                    計画推進ディレクター
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">第29回日本医学会総会2015 関西<br />(学術講演、展示その他)</th>
                  <td>2015年</td>
                  <td>
                    組織委員会 計画推進ディレクター
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">医と健康フォーラム2015 関西<br />(シンポジウム、市民イベント)</th>
                  <td>2015年</td>
                  <td>
                    プロデューサー
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">2015年 紀の国わかやま国体式典</th>
                  <td>2015年</td>
                  <td>
                    基本計画
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">2012年 植樹祭山口大会</th>
                  <td>2012年</td>
                  <td>
                    式典専門委員、式典プロデュース
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">水都大阪2009</th>
                  <td>2009年</td>
                  <td>
                    チーフディレクター、基本計画・実施計画策定
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">2007年ユニバーサル技能五輪国際大会</th>
                  <td>2007年</td>
                  <td>
                    プロデューサー、基本計画、実施計画策定
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">日本国際博覧会（愛知万博）</th>
                  <td>2005年</td>
                  <td>
                    博覧会協会 催事ディレクター、催事基本計画策定
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">山口きらら博（山口県）<br />ふるさとイベント大賞受賞</th>
                  <td>2001年</td>
                  <td>
                    プロデューサー、会場デザインディレクション、基本計画、実施計画策定
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">陝西省文華博(香川県)</th>
                  <td>1998年</td>
                  <td>
                    統括ディレクター、会場計画、デザイン・設計
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">山陰・夢みなと博覧会(鳥取県)</th>
                  <td>1997年</td>
                  <td>
                    会場演出チーフディレクター、会場計画、修景デザイン・設計
                  </td>
                </tr>
                <tr>
                  <th className="pl-0">世界リゾート博(和歌山県)</th>
                  <td>1994年</td>
                  <td>
                    会場計画、修景デザイン・設計
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">展示館</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th className="pl-0">山口きらら博メモリアル施設(山口市)</th>
                  <td>2011年</td>
                  <td>展示企画・デザイン・設計、映像企画・制作</td>
                </tr>
                <tr>
                  <th className="pl-0">出光創業史料館(門司)</th>
                  <td></td>
                  <td>展示企画・プロデュース</td>
                </tr>
                <tr>
                  <th className="pl-0">球泉洞森林館(熊本)</th>
                  <td></td>
                  <td>展示企画・デザイン</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className="p-5">
          <h3 className="text-xl font-extrabold">ショールーム</h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <th className="pl-0">コニカミノルタ アドバンスドレイヤーショールーム</th>
                  <td></td>
                  <td>展示デザイン</td>
                </tr>
                <tr>
                  <th className="pl-0">デュポン オートモーティブセンターショールーム</th>
                  <td></td>
                  <td>展示システムデザイン・コンテンツプロデュース</td>
                </tr>
                <tr>
                  <th className="pl-0">北陸電力サービスステーション「エルフ富山」</th>
                  <td></td>
                  <td>建築デザイン、インテリアデザイン・設計</td>
                </tr>
                <tr>
                  <th className="pl-0">北陸電力サービスステーション「エルフ福井」</th>
                  <td></td>
                  <td>インテリアデザイン・設計</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  )
}