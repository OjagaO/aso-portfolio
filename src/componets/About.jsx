import React, { useEffect, useRef } from 'react';
import BlackSlide from '../utils/blackSlide';
import Header from './Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AboutPage = () => {
    const aboutAreaRef = useRef(null);
    const backImgRef = useRef(null);

    // 背景の高さ調整
    const heightAdjust = () => {
        const aboutArea = aboutAreaRef.current;
        let aboutAreaH = aboutArea.innerHeight;
        let backImg = backImgRef.current;
        let winH = window.innerHeight;
        if (winH < aboutAreaH) {
            backImg.style.height = "auto";
        } else {
            backImg.style.height = "100vh";
        }
    };

    useEffect(() => {
        window.addEventListener('resize', heightAdjust);

        return () => window.removeEventListener('resize', heightAdjust);
    }, [])

    setTimeout(() => {
        heightAdjust();
    }, 50);

    return (
        <div id='a_body' className='box' ref={backImgRef}>
            <Header />
            <BlackSlide></BlackSlide>
            <main>
                <div className="main-box" ref={aboutAreaRef}>
                    <div className="inner">
                        <div className="header-title">
                            <h1>About..</h1>
                            <p>自己紹介</p>
                        </div>
                        <div className="main-content">
                            <div className="main-left">
                                <div className="my-img">
                                    <img src="./images/1643869900320.jpg" alt=""></img>
                                </div>
                                <div className="myself">
                                    <div className="my-title">
                                        <h3>麻生 大翔<br></br><span>Aso Hiroto</span></h3>
                                    </div>
                                    <div className="my-info">
                                        <dl>
                                            <dt>生年月日</dt>
                                            <dd>2000/12/06</dd>
                                        </dl>
                                        <dl>
                                            <dt>出生地</dt>
                                            <dd>北海道北見市</dd>
                                        </dl>
                                        <dl>
                                            <dt>現住所</dt>
                                            <dd>北海道札幌市</dd>
                                        </dl>
                                        <dl>
                                            <dt>連絡先</dt>
                                            <dd>ahiroto1234@gmail.com</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="main-right">
                                <div className="skill">
                                    <div className="skill-title">
                                        <h3>スキルセット</h3>
                                    </div>
                                    <Tabs className="skill-culm">
                                        <div className="wrapper">
                                            <TabList className="tab">
                                                <Tab><img src="./images/html-icon.png" alt="HTML"></img></Tab>
                                                <Tab><img src="./images/css-icon.png" alt="CSS"></img></Tab>
                                                <Tab><img src="./images/js-icon.png" alt="JavaScript"></img></Tab>
                                                <Tab><img src="./images/react-icon.png" alt=""></img></Tab>
                                                <Tab><img src="./images/wordpress-icon.png" alt=""></img></Tab>
                                            </TabList>

                                            <TabPanel id="html" className="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    W3C標準準拠したコーディングを心がけています
                                                </h2>
                                                <p>
                                                    実装したいことを実現するためにW3C標準から
                                                    外れてしまうこともありますし、
                                                    jQueryを導入している場合は、
                                                    その仕様上W3C標準に準拠できない
                                                    可能性もありますが、できる限り検索エンジンの最適化（SEO）・
                                                    アクセシビリティの向上・
                                                    データ軽量化による読み込み時間短縮・
                                                    メンテナンス性の向上等に努めるべく丁寧なコーディングを
                                                    心がけております。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="css" className="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    SCSSの使用経験あり
                                                </h2>
                                                <p>
                                                    CSSにおけるコーディングとして
                                                    カンプを見た瞬間にある構造を把握し、
                                                    どのように書けばよいのかがある程度浮かんできて
                                                    それをコーディングするのが得意です。
                                                    様々なプロパティへの理解も比較的高いです。
                                                    デザイン崩れの修正なども得意で検証ツールを用いて
                                                    一人で解決し続けてきました。HTMLの欄ではW3C標準に準拠すると記載しましたが、
                                                    CSS設計に関しては未就学です。就業先の命名規則に準拠いたします。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="javascript" className="area">
                                                <h2>
                                                    ★★★☆☆<br></br>
                                                    アプリケーションの制作経験がある
                                                </h2>
                                                <p>
                                                    Webサイトを作るうえではあまりバニラのJSというのは
                                                    触る機会が無かったのですが、将来的にフロントエンドエンジニアとして
                                                    活躍したいと思ったときに必須な言語となると思ったので訓練校に通っている期間に
                                                    独学で学びました。DOM操作や配列処理、ローカルストレージ、JSONなど最低限ではありますが
                                                    自らで１からTodoアプリの制作を行いました。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="React" className="area">
                                                <h2>
                                                    ★★☆☆☆<br></br>
                                                    当ポートフォリオもReactで作成されております
                                                </h2>
                                                <p>
                                                    とっかかりとしてTodoアプリの作成などから行い、
                                                    HTML,CSS,JQueryで作成された当ポートフォリオサイトを、
                                                    Reactで書き直して改修いたしました。
                                                    恐らくHooksなどを使いこなせば様々な機能や
                                                    記述量を減らせたりなどすると思うのでこれからも学び続けていきたい。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="wordpress" className="area">
                                                <h2>
                                                    ★★★☆☆<br></br>
                                                    既存のサイトをWordpress化できます。
                                                </h2>
                                                <p>
                                                    簡単なカスタマイズやテンプレートの追加、
                                                    既存のサイトのWordpress化等の初歩的な
                                                    知識については持ち合わせおります。
                                                    カスタム投稿テーマの追加や、テンプレートタグを用いた
                                                    コード側からのカスタムも多少できます。
                                                </p>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>
                                <div className="history">
                                    <div className="history-title">
                                        <h3>略歴</h3>
                                    </div>
                                    <div className="history-culm">
                                        <p>
                                            北見北斗高校卒業後、地元の北海道を飛び出し
                                            各地をホテルや旅館の仕事をしながら回っていたが
                                            コロナを機に失業。その際何のスキルもない人間が
                                            簡単に仕事を失う恐ろしさを知り
                                            スキルを用いた様々な仕事を
                                            調べていく中でプログラミングと出会った。
                                            現在はWEB制作会社に入社するため
                                            職業訓練校に通い勉強中。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutPage;