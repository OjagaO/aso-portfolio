import React, { useEffect, useState } from "react";
import "../componets/style.css";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AmbientLight, PointLight } from "three";
import BlackLine from "../utils/blackLine";

const Index = () => {
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        // ローディング画面の処理
        setTimeout(() => {
            document.getElementById("loading_area").style.display = "none";
        }, 8100);

        let innerWidth = window.innerWidth;
        let innerheight = window.innerHeight;

        const sizes = {
            width: innerWidth,
            height: innerheight,
        };

        const cleanup = () => {
            if (model) {
              // モデルをアンマウントする処理をここに追加
              scene.remove(model); // モデルを3Dシーンから削除
              model = null; // モデルの参照を削除
              mixer.stopAllAction(); // モデルのアニメーションを停止
            }
            setIsUnmounted(true);
          };

        const canvas = document.getElementById("canvas");
        let model;

        // scene
        const scene = new THREE.Scene();

        // camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        if (innerWidth < 1024) {
            camera.position.set(0, 0.55, 2);
        } else {
            camera.position.set(-0.85, 0.1, 2);
        }

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            // alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        // モデルの読み込み
        const gltfLoader = new GLTFLoader();
        let mixer;

        gltfLoader.load(
            "./models/scene.gltf",
            (gltf) => {
                if (isUnmounted) return; // コンポーネントがアンマウントされていた場合は処理を中止
                model = gltf.scene;
                model.scale.set(0.28, 0.28, 0.28);
                model.rotation.y = -Math.PI / 0.415;
                model.rotation.x = -Math.PI / 0.485;
                model.rotation.z = -Math.PI / 0.485;
                scene.add(model);

                mixer = new THREE.AnimationMixer(model);
                const clips = gltf.animations;
                clips.forEach(function (clip) {
                    const action = mixer.clipAction(clip);
                    action.play();
                });
            },
            () => {
                tick();
            }
        );

        const tick = () => {
            renderer.render(scene, camera);
            if (mixer) {
                mixer.update(0.01);
            }
            requestAnimationFrame(tick);
            console.log(isUnmounted)
        };

        // light
        const ambientLight = new AmbientLight(0xffffff, 3);
        scene.add(ambientLight);
        const pointLight = new PointLight(0xffffff, 2, 100);
        scene.add(pointLight);

        return cleanup;
    }, []);

    return (
        <div>
            <BlackLine>
                <div id="loading_area">
                    <div className="load">
                        <p>A</p>
                        <p>S</p>
                        <p>O</p>
                        <p>H</p>
                        <p>I</p>
                        <p>R</p>
                        <p>O</p>
                        <p>T</p>
                        <p>O</p>
                    </div>
                </div>
                <canvas id="canvas"></canvas>
                <div id="video">
                    <div className="header-main">
                        <div className="main-logo-box">
                            <p className="main-logo">
                                <img src={process.env.PUBLIC_URL + "/images/logo/toukalogo4.png"} alt="" />
                            </p>
                            <nav className="header-navigation">
                                <ul className="header-list">
                                    <li className="header-list-parts partsSP">
                                        <Link className="to_a target " to="/aso-portfolio/about" onClick="cleanup()">
                                            <p>Click to myPage</p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </BlackLine>
        </div>
    );
};

export default Index;
