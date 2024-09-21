"use client";
import WorksPage from "./works/page";

export default function Page() {
  return (
    <div>
      <div className="container max-w-full pb-5">
        {/* Hero Container */}
        <div className="hero bg-white min-h-64 shadow shadow-2xl rounded-lg opacity-95">
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

      <div className="container max-w-full bg-white rounded-lg mb-5 opacity-95">
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

      <div className="container max-w-full bg-white rounded-lg mb-5 opacity-95">
        <h2 className="p-5 text-2xl font-extrabold">UG WORK 概要</h2>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">名称</h3>
          <p>UG WORK 合同会社</p>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-extrabold">代表</h3>
          <p>澤田 裕二</p>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-extrabold">郵送先</h3>
          <p>110-0011 東京都千代田区内幸町1-3-1 幸ビルディング901</p>
        </div>
      </div>

      <div className="container max-w-full bg-white rounded-lg mb-5 opacity-95">
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

      <WorksPage />

    </div>
  )
}