import React, { useEffect, useRef } from "react";
import BlackSlide from "../utils/blackSlide";
import Header from "./Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const WorkPage = () => {

    const workAreaRef = useRef(null);
    const backImgRef = useRef(null);

    // 背景の高さ調整
    const heightAdjust = () => {
        const workArea = workAreaRef.current;
        let workAreaH = workArea.clientHeight;
        let backImg = backImgRef.current;
        let winH = window.innerHeight;
        if (winH >= workAreaH) {
            backImg.style.height = "100vh";
        } else {
            backImg.style.height = "auto";
        }
    };

    useEffect(() => {
        window.addEventListener("resize", heightAdjust);

        return () => window.removeEventListener("resize", heightAdjust);
    }, []);

    setTimeout(() => {
        heightAdjust();
    }, 100);

    // Page View Transitionのお試し
    function openFunc(ele) {
        document.startViewTransition(() => {
            document.getElementById(ele).hidden = false;
            document.getElementById("work-box").hidden = true;
        });
        const body = document.querySelector("body");
        const closeBtn = document.getElementById("close_btn");
        closeBtn.classList.add("active");
        body.classList.add("active");
    }

    function closeFunc(ele) {
        document.startViewTransition(() => {
            const closeBtn = document.getElementById("close_btn");
            const Modal = document.getElementsByClassName(ele);
            for (let i = 0; i < Modal.length; i++) {
                Modal[i].hidden = true;
            }
            document.getElementById("work-box").hidden = false;
            closeBtn.classList.remove("active");
            document.querySelector("body").classList.remove("active");
        });
    }

    return (
        <div id="w_body" className="box" ref={backImgRef}>
            <BlackSlide></BlackSlide>
            <Header />
            <main>
                <div className="main-box" ref={workAreaRef}>
                    <div className="inner">
                        <div className="header-title">
                            <h1>Works..</h1>
                            <p>制作物</p>
                        </div>
                        <div id="work-box">
                            <Splide
                                aria-label="ポートフォリオまとめ"
                                options={{
                                    autoplay: false,
                                    drag: true,
                                    rewind: true,
                                }}
                            >
                                <SplideSlide>
                                    <div className="title">
                                        <h3>|| Webアプリケーション</h3>
                                        <p>使用技術（JavaScript-Ajax/React/Next.js/microCMS</p>
                                    </div>
                                    <ul className="line">
                                        <li className=" work-item">
                                            <p id="demo05" className="work-item_p" onClick={() => openFunc("animatedModal5")}>
                                                <img src="./images/resize-todo.png" alt="thumbnail of site" className="transition_first5 photo_thumb"></img>
                                                <span className="work-item-sentence">|　　Todo List　　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo10" className="work-item_p" onClick={() => openFunc("animatedModal10")}>
                                                <img src="./images/weathr-sc.png" alt="thumbnail of site" className="transition_first10 photo_thumb"></img>
                                                <span className="work-item-sentence">|Weather Sapporo|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo12" className="work-item_p" onClick={() => openFunc("animatedModal12")}>
                                                <img src="./images/screencapture-ojagao-github-io-vanillaTodo-2023-01-07-13_47_12.png" alt="thumbnail of site" className="transition_first12 photo_thumb"></img>
                                                <span className="work-item-sentence">| Vanilla Todo |</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo13" className="work-item_p" onClick={() => openFunc("animatedModal13")}>
                                                <img src="./images/screencapture-ojagao-github-io-chatbot-2023-01-12-15_06_52.png" alt="thumbnail of site" className="transition_first13 photo_thumb"></img>
                                                <span className="work-item-sentence">|chat BOT|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo14" className="work-item_p" onClick={() => openFunc("animatedModal14")}>
                                                <img src="./images/pokemon_top.png" alt="thumbnail of site" className="transition_first14 photo_thumb"></img>
                                                <span className="work-item-sentence">| ポケモン図鑑 |</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo15" className="work-item_p" onClick={() => openFunc("animatedModal15")}>
                                                <img src="./images/microCMS_top.png" alt="thumbnail of site" className="transition_first15 photo_thumb"></img>
                                                <span className="work-item-sentence">| microCMS sample |</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo16" className="work-item_p" onClick={() => openFunc("animatedModal16")}>
                                                <img src="./images/micro-blog.webp" alt="thumbnail of site" className="transition_first16 photo_thumb"></img>
                                                <span className="work-item-sentence">| microCMS Blog |</span>
                                            </p>
                                        </li>
                                    </ul>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="title">
                                        <h3>|| 静的Webサイト</h3>
                                        <p>使用言語（HTML,CSS,JQuery</p>
                                    </div>
                                    <ul className="line">
                                        <li id="demo01" className="work-item">
                                            <p className="work-item_p" onClick={() => openFunc("animatedModal1")}>
                                                <img src="images/scshot-kita.png" alt="thumbnail of site" className="transition_first1 photo_thumb"></img>
                                                <span className="work-item-sentence">|　　北関東学院　　|</span>
                                            </p>
                                        </li>
                                        <li className="work-item">
                                            <p id="demo02" className="work-item_p" onClick={() => openFunc("animatedModal2")}>
                                                <img src="./images/scshot-cat2.png" alt="thumbnail of site" className="transition_first2 photo_thumb"></img>
                                                <span className="work-item-sentence">|猫カフェ～ごろごろ～|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo03" className="work-item_p" onClick={() => openFunc("animatedModal3")}>
                                                <img src="./images/diz-screenshot.png" alt="thumbnail of site" className="transition_first3 photo_thumb"></img>
                                                <span className="work-item-sentence">|　株式会社 Diz　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo04" className="work-item_p" onClick={() => openFunc("animatedModal4")}>
                                                <img src="./images/sizingHunter.png" alt="thumbnail of site" className="transition_first4 photo_thumb"></img>
                                                <span className="work-item-sentence">|　　Hunter.　　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo09" className="work-item_p" onClick={() => openFunc("animatedModal9")}>
                                                <img src="./images/Csalon.top.png" alt="thumbnail of site" className="transition_first9 photo_thumb"></img>
                                                <span className="work-item-sentence">|　north C east　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo06" className="work-item_p" onClick={() => openFunc("animatedModal6")}>
                                                <img src="./images/kitasalon.top.png" alt="thumbnail of site" className="transition_first6 photo_thumb"></img>
                                                <span className="work-item-sentence">|　NORTH C EAST　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo07" className="work-item_p" onClick={() => openFunc("animatedModal7")}>
                                                <img src="./images/kitakanndou.top.png" alt="thumbnail of site" className="transition_first7 photo_thumb"></img>
                                                <span className="work-item-sentence">|　　北関堂　　|</span>
                                            </p>
                                        </li>
                                        <li className=" work-item">
                                            <p id="demo08" className="work-item_p" onClick={() => openFunc("animatedModal8")}>
                                                <img src="./images/shrine.top.png" alt="thumbnail of site" className="transition_first8 photo_thumb"></img>
                                                <span className="work-item-sentence">|　　北関神社　　|</span>
                                            </p>
                                        </li>
                                    </ul>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="title">
                                        <h3>|| Wordpress</h3>
                                        <p>使用言語（PHP</p>
                                    </div>
                                    <ul className="line">
                                        <li className=" work-item">
                                            <p id="demo11" className="work-item_p" onClick={() => openFunc("animatedModal11")}>
                                                <img src="./images/diz-screenshot.png" alt="thumbnail of site" className="transition_first11 photo_thumb"></img>
                                                <span className="work-item-sentence">| Wordpress化した株式会社Diz |</span>
                                            </p>
                                        </li>
                                    </ul>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>

                <div className="modal-sample">
                    <button id="close_btn" className="close-modal" onClick={() => closeFunc("all_modal")}>
                        +
                    </button>
                    <div id="animatedModal1" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        北関東学院<br></br>
                                        <a href="https://ojagao.github.io/kitakanto/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて１ヶ月程経った時期に課題で作成した 職業訓練校の擬似サイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            静的な部分のコーディングに15時間程度。<br></br>
                                            CSSでのハンバーガーメニューにてこずりレスポンシブに10時間程度。
                                            <br></br>
                                            習っていないJQueryを調べながら15時間程度。合計約40時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・レスポンシブができる限り綺麗になるようにした点<br></br>
                                            ・レスポンシブがどのサイズでも崩れがないようにした点
                                            <br></br>
                                            ・初めてスマホサイズから制作<br></br>
                                            ・CSSのみでハンバーガーとアコーディオンを実装<br></br>
                                            ・スマホとPCの用途の違いに合わせて電話のメニューを変更
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆コンセプト</dt>
                                        <dd>
                                            実際に使われているWEBページはカラーにまとまりが無く、 ページ内リンクなどがなく欲しい情報に適宜移ることが出来ない というのが気になった点であり、主な連絡手段が電話であると言うふうに
                                            感じ取れたのでスマホサイズでは直接電話につながるような設計にし、パソコンサイズでは 直接電話をかける人はほとんどいないだろうということで電話番号のみの表記にしております。
                                            <br></br>
                                            <br></br>
                                            全体的なコンセプトとしては青を基調として自分が実際に職業訓練校に通おう。 と思った際にわからなくて困ったことなどを解消できるように致しました。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・卒業後のビジョンをわかりやすく示したかった<br></br>
                                            ・写真の素材がなかなか集まらずに統一感がなく伝えたい情報にマッチしない写真を使っている。
                                            <br></br>
                                            ・開講中のクラスに関する情報をリアルタイムで更新できる機能をつけたかった
                                            <br></br>
                                            ・開講するクラスごとの下層ページなども制作したかった。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・通い始めて１ヶ月の時期に制作を始めたこともあり HTML,CSS,JQueryの基礎的な部分もおろそかな状態で 制作に取り掛かった為一つ一つ調べながらでとても時間がかかった点
                                            <br></br>
                                            <br></br>
                                            ・最初にデザインを決める段階でこんなにデザインを考えるのが大変なのかと痛感させられ 結局いろんなサイトから参考にしたりしながらオリジナリティーのあるモノにできなかった点
                                            <br></br>
                                            <br></br>
                                            ・あまり理解度の高くないものをカスタマイズしようとした時に崩れがどこが原因で起きているのかが なかなかわからずにすごい時間を費やしてしまった点<br></br>
                                            <br></br>
                                            ・CSSのみでハンバーガーとアコーディオンを実装しようと思ったときに HTML側の構造に制限が付きまとってしまいなかなか思い通りのデザインや 動きを実装できなかった点<br></br>
                                            <br></br>
                                            ・レスポンシブというものがそもそも中々理解が足りてなく シンプルにレスポンシブに苦労致しました
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            HTML,CSSへの理解が深まりJQueryというものの概要をつかむ機会となりました。 日頃見るハンバーガーメニューやアコーディオンメニュー等、 動きのある機能を実装できた時は感動しました。
                                            リッチな動きなどはまだ実装できませんでしたが 今後リッチな動きを実装できるようになりたいと思わされました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                <img src="images/scshot-kita.png" alt="thumbnail of site" className="transition_first1 photo_thumb photo_detail"></img>
                                {/* <img src="./images/screencapture-ojagao-github-io-kitakanto-2022-11-05-15_18_28.png" alt="" className="transition_first1 photo_thumb photo_detail"></img> */}
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal2" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        猫カフェ～ごろごろ～<br></br>
                                        <a href="https://ojagao.github.io/catcafe/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて１ヶ月半程経った時期に自主的に作成した 猫カフェの架空サイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            静的な部分のコーディングに25時間程度。<br></br>
                                            レスポンシブに20時間程度。<br></br>
                                            JQueryを調べながら5時間程度。<br></br>
                                            合計約50時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・やわらかい雰囲気で統一した点<br></br>
                                            ・レスポンシブした点<br></br>
                                            ・初めてJQueryでハンバーガー制作<br></br>
                                            ・headerで初めてkeyframeを使い動きをを実装<br></br>
                                            ・コンタクトページで中に文字を入れて整頓した点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆コンセプト</dt>
                                        <dd>
                                            本猫カフェは猫の可愛さや癒しというのをテーマに制作いたしました。 そのサービスやコンテンツに適した写真の素材や、 色使いというのを心がけてコーディングを行いました。
                                            <br></br>
                                            <br></br>
                                            全体的なコンセプトとしては淡い雰囲気を基調として、 日ごろの仕事に疲れや不満があり猫に癒しを求める女性の方をターゲットとしました。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・background-imageとimgタグで出来ることがアバウトだったのでそこを整理しなおしてコーディングしたい。
                                            <br></br>
                                            ・positionを多用してしまったことにより強引にデザインを整えたが故にレスポンシブにとても苦労した点
                                            <br></br>
                                            ・お店のこだわりなど強みをもう少し押し出したページにしたかった
                                            <br></br>
                                            ・細かい部分でのデザインの崩れがみられるのでHTML側から整えたい。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・中々思い通りのデザインにならず、強引に整えるためにpositionの多用の結果 高さが浮いてしまったり、レスポンシブの際に崩れがひどかったりとpositionはできる限り使わず、
                                            特定のコンテンツの中で整えるために正しく使おうと思いました。
                                            <br></br>
                                            <br></br>
                                            ・画像のサイズなどがなかなか合わずに思い通りのデザインにならなかった点
                                            <br></br>
                                            <br></br>
                                            ・淡い雰囲気にするために疑似要素で全体的に淡くしたのですが その弊害でaタグが機能しなくなったりはっきりさせたい部分も淡くなってしまった点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            HTML,CSSへの理解が深まりJQueryを一から書いてみる機会となりました。 全体的に雰囲気を統一して複数ページを作るという経験は初めてでしたので 出来上がった時の達成感がありました。
                                            keyframeで様々なことができるんだなと少しリッチな動きも実装出来て楽しかったです。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                <img src="./images/scshot-cat2.png" alt="thumbnail of site" className="transition_first2 photo_thumb photo_detail"></img>
                                {/* <img src="./images/screencapture-ojagao-github-io-catcafe-survice-html-2022-11-07-10_57_38.png" alt=""></img> */}
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal3" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        株式会社 Diz<br></br>
                                        <a href="https://ojagao.github.io/Diz/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて2ヶ月程経った時期に自主的に作成した IT系会社の架空サイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            静的な部分のコーディングに30時間程度。<br></br>
                                            レスポンシブに15時間程度。<br></br>
                                            JQueryが10時間程度。<br></br>
                                            slick,particleに10時間程度<br></br>
                                            合計約65時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・触れたことのないプラグインを積極的に使った点<br></br>
                                            ・CSSで細やかなアニメーションを実装した点<br></br>
                                            ・JSでマウスストーカーを実装<br></br>
                                            ・ダウンロードの際にいきなりPDFなどがダウンロードされ無いように確認を入れた点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆コンセプト</dt>
                                        <dd>
                                            本IT系サイトは先進的なイメージというのをテーマに制作いたしました。 普通の企業だと鬱陶しく感じられるマウスストーカーなどや、 particleなどによる動きを取り入れました。
                                            <br></br>
                                            <br></br>
                                            全体的なコンセプトとしてはグラデーションを用いた配色を基調として、 その分他の場所はシンプルにしております。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・indexのページのマウスストーカーの動きが重くなってしまった点。
                                            <br></br>
                                            ・トップページのファーストインパクトが弱くなってしまった点
                                            <br></br>
                                            ・求人の部分などはさらに細かくして新卒、キャリア等更に下層ページまで作成したかった
                                            <br></br>
                                            ・デザインがなんとなく納得がいかなく、その理由がわからない点。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・様々なプラグインを取り入れたことにより動作が重くなってしまい、 その原因を特定して改善しようとコード事態や順番を見直したりした点
                                            <br></br>
                                            <br></br>
                                            ・JQuery等で共通化をしていないのでheaderの変更に苦労した点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            プラグインやライブラリといったものを積極的に使うをコンセプトに制作したので、 slick,particleを使いJSでマウスストーカーを実装出来たことに喜びや楽しさを感じました。
                                            ただ初めて動作が重くなって困るという事態に遭遇しましたので今後軽量化等にも目を向けていきたいと思いました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-Diz-2022-11-07-15_30_23.png" alt=""></img> */}
                                <img src="./images/diz-screenshot.png" alt="thumbnail of site" className="transition_first3 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal4" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        Hunter.<br></br>
                                        <a href="https://ojagao.github.io/Hunter/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて2ヶ月経った時期に作成した 美容サロンの架空サイト( LP )になります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            静的な部分のコーディングに10時間程度。<br></br>
                                            レスポンシブに4時間程度。<br></br>
                                            JQueryが3時間程度。<br></br>
                                            その他様々な修正3時間<br></br>
                                            合計約20時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・一つ一つのホバー等の動きをこだわり一から作成<br></br>
                                            ・CSSで細やかなアニメーションを実装した点<br></br>
                                            ・JQueryでスクロールの方向を取得<br></br>
                                            ・timeタグのdatetime,itempropなどを用いてSEOを意識したコーディング
                                            <br></br>
                                            ・日付選択をプラグインを用いて実装した点<br></br>
                                            ・時間を意識して３日という目標で作った点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆コンセプト</dt>
                                        <dd>
                                            本美容系サイトは清潔感と高級感を意識して作成しました。 高級感を出しすぎないように、スタッフの人柄の良さや体験談などを交えたページです。
                                            <br></br>
                                            <br></br>
                                            全体的なコンセプトとしては白を基調にグレーと黒のシックなサイトに仕上げました。 高級感と誠実さが感じられやすいようにそのような配色にしました。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・女性をターゲットにしているのでもう少し色味のあるサイトが良かったのではないか
                                            <br></br>
                                            ・画像等に妥協してしまったので当初のイメージとは異なってしまった点
                                            <br></br>
                                            ・BLOGのエリアはSEOの観点から取り入れたが、もう少し作りこめたなという点
                                            <br></br>
                                            ・後半のデザインの物足りなさ。<br></br>
                                            ・日付選択画面のユーザビリティーをもう少し高めたかった点
                                            <br></br>
                                            ・あと４時間ほど短縮して二日で完成させたかった点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・SVGを用いたリッチな動きを実装するにあたり外から取り入れたものと 自分が一から書いているものがなかなか繋がらずに手こずった点
                                            <br></br>
                                            <br></br>
                                            ・下スクロール時にヘッダーが現れる動きを実装したのだが1pxでも上にあがると 消えてしまい動きの激しいUIになってしまうのでそこのバッファを持たせた点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            今回は新しい技術というよりも既存の技術で素早く制作するという目標で制作をはじめ、 もう少し早く終われると思っていたのですが素材探し等に時間を思ったよりもとられてしまい
                                            想定時間を数時間オーバーしてしまった。素材等がそろっていて変に凝るようなことが無ければ、
                                            二日もかからずにできたと思うので先に素材をそろえて、実装したい動きもまとめてから作業を開始することを意識して気を付けていきたい。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screenshot-beautysalon.jpeg" alt=""></img> */}
                                <img src="./images/sizingHunter.png" alt="thumbnail of site" className="transition_first4 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal5" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        Todo List<br></br>
                                        <a href="https://ojagao.github.io/TodoReact/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて2ヶ月半通った時期に作成した Todoリストになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>動画を見ながらの作成になりましたので合計2時間程度。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆目的</dt>
                                        <dd>
                                            Reactを触ってみたいという願望から始まった制作<br></br>
                                            Reactの大まかな雰囲気をつかむというのが目的
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・書き込んだタスクをローカルストレージに保存できるようにしたかった点
                                            <br></br>
                                            ・動画通りの制作でオリジナリティを出せなかった点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・スタートがReactの知識が0、JSの知識が未熟な状態だった点
                                            <br></br>
                                            ・わからないことを調べながらの為、時間がかかった点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            結果的にhooksやprops。コンポーネント単位で制作ができ管理がしやすい等の Reactの利点を一部ながら体感することができた。スタートする前に聞いたHTMLとJSが混ざったような記述
                                            というのもなんとなくわかり、HTML,CSSとは違った仕組みを構築するという体験が楽しかった。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/sp-todo.png" alt=""></img> */}
                                <img src="./images/resize-todo.png" alt="thumbnail of site" className="transition_first5 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal6" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        NORTH C EAST<br></br>
                                        <a href="https://ojagao.github.io/kitasalon/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月通った時期に他クラスの要望により作成した PCサイズのみのサイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>PCサイズのみなので5～6時間程度</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・スクロールに合わせてもっと動きを追加すればよかった点
                                            <br></br>
                                            ・PC１ページに時間をかけすぎた点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>・特になし</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            HTML,CSSの基礎的な部分の復習となった。<br></br>
                                            疑似要素でデザイン的な部分を書くという経験があまり無かった為 とても練習になった。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-kitasalon-2022-12-07-11_39_35.png" alt=""></img> */}
                                <img src="./images/kitasalon.top.png" alt="thumbnail of site" className="transition_first6 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal7" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        北関堂<br></br>
                                        <a href="https://ojagao.github.io/wagashi/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月通った時期に他クラスの要望により作成した PCサイズのみのサイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>PCサイズのみなので5～6時間程度</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・リッチな動きを実装出来ればよかった点<br></br>
                                            ・カンプ通りなので仕方がないがヘッダーのデザインを少し改善したかった。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>・不足分の素材を自前で調達や、画像サイズがバラバラであったためトリミングが必要だった点</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>コーディングの面で苦労することはあまりなかったが、 画像素材の調達や、画像のサイズ等現場に出ても起こりえることだと思い、 対処することができた。</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/sc_kitakanndo.png" alt=""></img> */}
                                <img src="./images/kitakanndou.top.png" alt="thumbnail of site" className="transition_first7 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal8" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        北関神社<br></br>
                                        <a href="https://ojagao.github.io/shrine/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月通った時期に他クラスの要望により作成した PCサイズのみのサイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>PCサイズのみなので5～6時間程度</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・スクロールに合わせてもっと動きを追加すればよかった点
                                            <br></br>
                                            ・PC１ページに時間をかけすぎた点<br></br>
                                            ・jQueryを用いたサイドヘッダーの動きの処理がうまくいかなかった点
                                            <br></br>
                                            ・取得した値をbodyに付与したかったがリロードごとに値が変わってしまう点を改善できなかった。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>・positionで浮いた高さをjQueryで取得した高さを与えて解決した点</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            上記にもある通りpositionで浮いてしまった要素に高さを用いた動きを実装したいが高さがないため 綺麗に実装できずに苦労したが、別の要素から高さを取得して与えることで解決ができたので、
                                            高さを取得するタイミングも重要だということに気づけました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-shrine-2022-12-07-11_40_08.png" alt=""></img> */}
                                <img src="./images/shrine.top.png" alt="thumbnail of site" className="transition_first8 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal9" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        north C east<br></br>
                                        <a href="https://ojagao.github.io/kitasalon2/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月通った時期に他クラスの要望により作成した PCサイズのみのサイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>PCサイズのみなので5～6時間程度</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>・カンプ上の文字数とレイアウト的に実現不可能なデザインに遭遇した際に、 レイアウトをコチラで少しいじってしまった点。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>・上記にもある通り、カンプ上の例文と実際の文字数の差異により 文字数とレイアウト的に実現不可能なデザインに遭遇した点</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>jQuery等のプラグインを複数用いて 上記の課題を解決することができたのはよかったが 実際の現場ではそれがクライアントの希望と異なる可能性も考慮すると、 様々な切り口の解決策を持っておきたいと思いました。</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-kitasalon2-2022-12-07-11_38_31.png" alt=""></img> */}
                                <img src="./images/Csalon.top.png" alt="thumbnail of site" className="transition_first9 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal10" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        Weather Sapporo<br></br>
                                        <a href="https://ojagao.github.io/weather/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月半程経った時期に自主的に作成した 天気アプリになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            静的な部分のコーディングに2時間程度<br></br>
                                            参考動画を視聴しつつJQuery,Ajaxを調べながら2時間程度。
                                            <br></br>
                                            APIや自分独自の機能に4時間程度合計約8時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・自分なりに見やすいようにレイアウトを整えた点<br></br>
                                            ・スマホのみだがレスポンシブした点<br></br>
                                            ・初めてJQueryでAjaxを使いデータの取得をした点<br></br>
                                            ・背景が天気に合わせて変わる独自の関数の作成<br></br>
                                            ・取得したデータをそのまま出力するのではなく、見る人が見やすいようにreplace等で整えた点
                                            <br></br>
                                            ・ケルビンの値でJSONから送られて来る値を小数点第二位のセルシウス温度に変換する関数を作った点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆コンセプト</dt>
                                        <dd>
                                            以前から天気を使ったアプリケーションを作ってみたいという思いがあった為、 それと並行してターゲットを自分とした場合の制作になりました。
                                            <br></br>
                                            <br></br>
                                            降水確率と風速等に左右される体感温度あたりが自分としては欲しい情報だったので それを盛り込んだ天気アプリとなっております。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点</dt>
                                        <dd>
                                            ・条件分岐などで降水確率の特定のラインをを使用者が指定出来てそのラインを超えると通知がいって傘を忘れないように通知する機能等を盛り込みたかった
                                            <br></br>
                                            ・上にも書いたことだが情報の押し付けのような側面が多いため、アクションに対するレスポンスを返すような動きを実装したかった
                                            <br></br>
                                            ・デザインやレイアウトはもう少しこだわれた
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆苦労した点</dt>
                                        <dd>
                                            ・いくつか独自の関数を書いていたのですが、その中で吐き出されるバグや 少しだけ思い通りにいかない等の修正。<br></br>
                                            <br></br>
                                            ・for文の動作が思った通りに行かなくて、色々試した結果正しく動かせるようになったが 原因があまり正確に把握できていない点<br></br>
                                            <br></br>
                                            ・わからないことが出てきたときに上手に検索して、欲しい情報をすぐにとることができなかった。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>JSを用いてAPIのkeyや、ajaxに関して学ぶことができた。 自分でほしい情報などをいじれたり、JSを一から書いて関数を作ったりと自分のスキル外のことを模索しながら 失敗したり成功したりと楽しい時間だった。</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/weather-sp.png" alt=""></img> */}
                                <img src="./images/weathr-sc.png" alt="thumbnail of site" className="transition_first10 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal11" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        Wordpress化した株式会社 Diz<br></br>
                                        <a href="http://program21.wp.xdomain.jp/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて3ヶ月程経った時期にWordpress化した 過去に作った架空サイトになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            読み込めない部分のURI化に3時間程度<br></br>
                                            共通パーツ化に2時間程度。<br></br>
                                            飛べないリンクの修正や投稿ページの為のsingle.php作成に3時間程度合計約8時間。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・既存サイトのニュース欄を投稿に合わせて更新されるようにした点
                                            <br></br>
                                            ・アイキャッチ画像がそのまま投稿ページのサムネイルになるように設定した点
                                            <br></br>
                                            ・共通化が最初うまくいかなかったが最終的にget_template_partでうまくいくようにした点
                                            <br></br>
                                            ・固定ページごとにスラッグを指定してpage-$slug.phpで対応した点
                                            <br></br>
                                            ・functions.phpを使用してこのページに合わせた機能を追加した点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・WPのテンプレートタグで出力されるHTMLが少し変わっていてレイアウトが崩れたりということもあったので随時検証機能などを用いて確認するべきだった点
                                            <br></br>
                                            ・既存のサイトをそのまま置き換えただけでプラグインなどを使って利便性を上げることができなかった点
                                            <br></br>
                                            ・パーツごとの共通化はうまくいったがページごとのレイアウトの共通化があまりうまくいかなかったのでWP実装前にデザインを固めるべきだった点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            既存のサイトをWordpress化することでWordpress独自のPHPの理解が深まり、 既存のテーマなどをいじる際にもとても活きそうだと感じた。
                                            つまずく度に調べながら適したテンプレートタグを当てはめていく作業は気持ちが良かった。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-Diz-2022-11-07-15_30_23.png" alt=""></img> */}
                                <img src="./images/diz-screenshot.png" alt="thumbnail of site" className="transition_first11 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal12" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        Vanilla Todoリスト<br></br>
                                        <a href="https://ojagao.github.io/vanillaTodo/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて4ヶ月程経った時期に作成した Todoリストになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            デザインや見た目、レスポンシブに１時間程度<br></br>
                                            JavaScriptのコードの模索に10時間程度<br></br>
                                            合計11時間程度です
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・チェックボックスで完了と削除を管理できるようにした点
                                            <br></br>
                                            ・タスクの追加をEnterキーと＋ボタンのどちらでも追加できるようにした点
                                            <br></br>
                                            ・細かく条件分岐しアラートで状況喚起を行うようにした点
                                            <br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・1から自分でJavaScriptを書くのが初めてだった為、メソッド(？)が思った通りの結果を出してくれず自分のまだ学べていないメソッドでしか解決できなかった点
                                            <br></br>
                                            ・foreach文の中のfor文の中の挙動がうまくいかずアプローチ自体を大幅に変えて解決した点
                                            <br></br>
                                            ・ローカルストレージとのやり取りがコンソールログを細かく確認しないと全然動かなかった点
                                            <br></br>
                                            ・DOMの取得が配列で行われるものなのかオブジェクトで取得できているのか等がごちゃごちゃで、メソッドが仕事したりしなかったりした点
                                            <br></br>
                                            ・ローカルストレージに保存した情報を更新時に画面上に正しく表示するのに苦労した点
                                            <br></br>
                                            ・関数や定数が正しくてもその関数をどこで呼び出すのか、どこで定義するのかがとても重要だということに気づけました。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            今までJavaScriptは動画等を見ながらなぞらえて作っていただけだったのですが、 過去に動画を見ながらReactで作ったTodoリストをバニラのJSで１から自分で書き直してみようということで、
                                            制作を始めたのですが、自分で書くのがこんなに難しいとは思いませんでした。removeで要素を消すというのを一つとっても
                                            複数の要素を配列で取得していたためにfor文等で回さないと消せないというのがわからずにremoveに問題があるんじゃないかと思い
                                            数時間同じことをし続けるなど、１から自分で書く難しさを感じました。ですが同時に完成した時の格別の達成感を感じました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/sp-vanillaTodo.png" alt=""></img> */}
                                <img src="./images/screencapture-ojagao-github-io-vanillaTodo-2023-01-07-13_47_12.png" alt="thumbnail of site" className="transition_first12 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal13" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        chat BOT<br></br>
                                        <a href="https://ojagao.github.io/chatbot/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>職業訓練校に通い初めて4ヶ月程経った時期に作成した チャットボットになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作時間</dt>
                                        <dd>
                                            デザインや見た目、レスポンシブに0.5時間程度<br></br>
                                            JavaScriptのコードの模索に20時間程度<br></br>
                                            合計20時間程度です
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・送信ボタンとエンターキーのどちらでも送信できるようにした点
                                            <br></br>
                                            ・Math.randomでおみくじの遊び心を加えた点<br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・チャットボット側がメッセージを送っているときは利用者側の送信ボタンを機能しないようにしたかったがうまくできなかった点
                                            <br></br>
                                            ・スマホで確認した時にメッセージの入力欄が隠れてしまったので100vhではなくてJSで値を取得して解決した点
                                            <br></br>
                                            ・一つ目の改善点に付随したものになるがボット側が送っている途中や想定外のアクションが行われた際に想定通りの挙動ができない点
                                            <br></br>
                                            ・preventDefaultがないと無駄なというか指定していない動きなども含まれていることを知らずに時間をかけてしまった点
                                            <br></br>
                                            ・初めて引数を二つ用いた点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            JavaScriptのメソッド等をしっかりと学ぶ前に実際にアプリケーションを作っていると 自分のその時持っている知識だったらこう解決できそうだなと思ってやってみてうまくいかないなと思い、調べてみると
                                            意外と簡単に別のメッソドで解決出来たりしたので実際に作ることと並行して、 様々なメソッドに限らず知識を学びたいなと思いました。
                                            引数を二つ指定する便利さやDOM操作、配列など様々なことを使いながら制作できてすごいいい経験になりました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screencapture-ojagao-github-io-chatbot-2023-01-12-15_05_35.png" alt=""></img> */}
                                <img src="./images/screencapture-ojagao-github-io-chatbot-2023-01-12-15_06_52.png" alt="thumbnail of site" className="transition_first13 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal14" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        ポケモン図鑑<br></br>
                                        <a href="https://pokemon-book-7zo024pvq-ojagao.vercel.app/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>Udemyで受講した講座にあった英語版のポケモン図鑑を日本語化したものになります。</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作の経緯と流れ</dt>
                                        <dd>
                                            Zennの方で情報発信しています。
                                            <a href="https://zenn.dev/h_aso/articles/2220c857f5b74c" target="_blank" rel="noreferrer">
                                                こちら
                                            </a>
                                            から記事に飛ぶことができます。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・最初にも書いた通り英語表記のポケモン図鑑から日本語表記に手探りでたどり着いた点
                                            <br></br>
                                            ・ページ切り替えのボタンやヘッダーのデザインをポケモンに寄せたり、
                                            <br />
                                            ホバーアクションにもポケモン要素を組み込んだ点<br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・PokeAPIの使い方というような記事は多く見かけたものの、日本語表記の方法のページを発見できなかったのでそこに苦労しました。
                                            <br></br>
                                            ・１ページ目なのにも関わらず戻るボタンが表示されてしまっていたり複数ページまたいで移動ができないのでページネーションを実装したりという改善点がある。
                                            <br></br>
                                            ・Jsonデータの階層構造によって処理を行う関数をうまく使いまわせた点
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>あくまでベースはUdemy講座で受講しながら製作したのでベースの制作自体はスムーズにいったが、 自分でアレンジを加えていこうとすると理解度を試されているようでとても良い経験になった。</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/pokemon.png" alt=""></img> */}
                                <img src="./images/pokemon_top.png" alt="thumbnail of site" className="transition_first14 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal15" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        microCMS<br></br>
                                        <a href="https://micro-cms-sample.vercel.app/?vercelToolbarCode=_OYXUjWFliWbvLn" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>CMSの裏側の機能だけを使えるという話を聞いて気になったので既存の静的サイトのBlogという欄の動きのみを実装してみたサイト</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作の経緯と流れ</dt>
                                        <dd>
                                            上記の通り気になったので触ってみて、過去に作成した静的サイトのBlogの部分をheadlessCMS化したのが今回のサイトになります。
                                            <br />
                                            Zennの方で情報発信しています。
                                            <a href="https://zenn.dev/h_aso/articles/a281a7b4a2d72e" target="_blank" rel="noreferrer">
                                                こちら
                                            </a>
                                            から記事に飛ぶことができます。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・参考にさせていただいた記事はJavaScriptで書かれていたのでTypeScriptに書き直した点
                                            <br></br>
                                            ・実際に想定できそうな既存の静的サイトのお知らせの部分だけを
                                            <br />
                                            もっと簡単に更新できるようにしたいというニーズを満たすようなことが可能になった点<br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・上記にも書いた通りTypeScriptが手探りだったため、APIと型指定があまりうまくいかなくてアサーションを使用しないようにして苦労した点
                                            <br></br>
                                            ・動きを学ぶためだけに下層を作り込んでいないので改善の余地あり。
                                            <br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            CMSを導入する際にWordpressを使うという選択肢からさらに一つ別の選択肢ができて、さらにAPIで簡単に実装できるというのは驚きの体験でした。
                                            今回は実際に使用してい、されていないものを作ったので実際にmicroCMSで運用できるようなサイトを作ってみたいと思いました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screenshot-beautysalon.jpeg" alt=""></img> */}
                                <img src="./images/microCMS_top.png" alt="thumbnail of site" className="transition_first15 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                    <div id="animatedModal16" className="all_modal" hidden>
                        <div className="modal-content">
                            <div className="modal-box">
                                <div className="modal-title">
                                    <h2>
                                        microCMS<br></br>
                                        <a href="https://micro-blog-kohl.vercel.app/" target="_blank" rel="noreferrer">
                                            実際のサイトはこちら→
                                        </a>
                                    </h2>
                                </div>
                                <div className="modal-info">
                                    <dl>
                                        <dt>◆作品概要</dt>
                                        <dd>前回microCMSの概要を把握したので実際にブログを作りながら機能を学んだもの</dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作の経緯と流れ</dt>
                                        <dd>
                                            上記の通り以前学んだことを一から形にしてブログを作ってみたのが今回の作品になります。
                                            <br />
                                            Zennの方で情報発信しています。
                                            <a href="https://zenn.dev/h_aso/articles/a281a7b4a2d72e" target="_blank" rel="noreferrer">
                                                こちら
                                            </a>
                                            から記事に飛ぶことができます。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆こだわり</dt>
                                        <dd>
                                            ・React hooksを使用してサイドバーの追従を実装した点
                                            <br></br>
                                            ・流行りと言うには遅れていますがニューモフィズムっぽい感じのブログデザインにした点
                                            <br />
                                            ・各コンポーネントに分けて実装しているので管理が比較的楽な点<br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆改善点・苦労した点</dt>
                                        <dd>
                                            ・設計の段階での見通しが甘くpropsの受け渡しが多くなってしまったのでuseContext等を用いて管理するべきだったかもしれない点
                                            <br></br>
                                            ・当初自分が作りたかった設計が後々調べていく中で破綻した際にコードが冗長になり、可読性も下がり、共通パーツの強みを活かしきれていない点。
                                            <br></br>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>◆制作を通してのコメント</dt>
                                        <dd>
                                            microCMS様のブログを模写するような形で機能をなぞっていったのですが、Next.jsのルーティングがまだあまりしっくりきていないせいか
                                            あまり自分の想定通りの挙動なならずに納得のいかない仕上がりになってしまったので、事前に記事等を読み、流れをなんとなくではなく全てイメージしてから
                                            設計して制作に入ろうと思わされました。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="modal-img">
                                {/* <img src="./images/screenshot-beautysalon.jpeg" alt=""></img> */}
                                <img src="./images/micro-blog.webp" alt="thumbnail of site" className="transition_first16 photo_detail"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WorkPage;
