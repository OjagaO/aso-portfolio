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
        let aboutAreaH = aboutArea.clientHeight;
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
                                                <Tab><img src="./images/markup.jpg" alt="markup"></img></Tab>
                                                <Tab><img src="./images/TS_icon.svg" alt="TypeScript"></img></Tab>
                                                <Tab><img src="./images/Node_js.png" alt="Node.js" className='node_img'></img></Tab>
                                                <Tab><img src="./images/react-icon.png" alt=""></img></Tab>
                                                <Tab><img src="./images/wordpress-icon.png" alt=""></img></Tab>
                                            </TabList>

                                            <TabPanel id="markup" className="area">
                                                <h2>
                                                    ★★★★★<br></br>
                                                    静的ページのマークアップには自信があります
                                                </h2>
                                                <p>
                                                    レスポンシブは当然として様々なJSライブラリを使用してモダンな動きのサイトを作成できます。
                                                    契約上ライブラリが使えないという場合も、ある程度自分で一から書くことも可能です。
                                                    製作スピードに関しては１ページのLP（h:8000px程度）デザインカンプがあがって画像の準備もある場合だと1.5~2人日という程度です。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="javascript" className="area">
                                                <h2>
                                                    ★★☆☆☆<br></br>
                                                    基本的な型指定が可能
                                                </h2>
                                                <p>
                                                    JavaScriptの知識に型指定の知識が申し訳なく付いている状態です。
                                                    以前書いていたJavaScriptのコードに随時型指定をして使っている状態で、
                                                    TypeScriptをうまく使いこなしているという感覚が湧いていません。
                                                    TypeScriptに関しては初心者レベルです。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="css" className="area">
                                                <h2>
                                                    ★★★☆☆<br></br>
                                                    APIなどからデータを取得
                                                </h2>
                                                <p>
                                                    主にデータを取得してフロント領域に描写する為に使用するのが主です。
                                                    OpenWeatherAPIを使用して天気アプリを作ったり、
                                                    OpenAI APIを使用して、AIにLINE上で回答してもらえる
                                                    LINE BOTを製作した際やFirebaseと連携する記事投稿アプリを製作した際に使用しました。
                                                </p>
                                            </TabPanel>
                                            <TabPanel id="React" className="area">
                                                <h2>
                                                    ★★★★☆<br></br>
                                                    当ポートフォリオもReactで作成されております
                                                </h2>
                                                <p>
                                                    とっかかりとしてTodoアプリの作成などから行い、
                                                    HTML,CSS,JQueryで作成された当ポートフォリオサイトを、
                                                    Reactで書き直して改修いたしました。
                                                    Next.jsを学んでいなかったのでフレームワークを使用していない状態ですが、
                                                    以前microCMSを触ってみた時にNext.jsで作成したのでそれからも学習しています。
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
                                            高校卒業後、地元の北海道を飛び出し
                                            各地をホテルや旅館の仕事をしながら回っていたが
                                            コロナを機に失業。様々な仕事を調べていく中でプログラミングと出会った。
                                            職業訓練校でマークアップとWorrdpressを学び現在はWEBの製作、
                                            更新を行うデザイン会社に勤務しながら
                                            フロントエンド領域（Next.js等）とPythonを勉強中。
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