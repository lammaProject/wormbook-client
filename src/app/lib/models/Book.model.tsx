"use client";

import React, { useRef, useState } from "react";
import { DoubleSide, Group } from "three";
import { useSpring } from "@react-spring/core";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { animated } from "@react-spring/three";

const Book = ({
  front_file,
  back_file,
  bot_file,
  ...props
}: {
  front_file: string;
  back_file: string;
  bot_file: string;
}) => {
  const meshRef = useRef<Group>(null);
  const [hovered, setHover] = useState(false);
  // Загрузка текстуры обложки
  const [frontTexture, backTexture, botTexture, pagesTexture] = useTexture([
    front_file,
    back_file,
    bot_file,
    "http://localhost:8000/./upload/pages.jpg",
  ]);

  // Анимация при наведении и клике
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 2]} />
      <OrbitControls enableZoom={false} />

      <animated.group
        {...props}
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={scale}
      >
        {/* Задняя часть */}
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial map={backTexture} side={DoubleSide} />
        </mesh>

        {/* Обложка */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial map={frontTexture} side={DoubleSide} />
        </mesh>

        {/* Корешок */}
        <mesh position={[-0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.1, 1.5]} />
          <meshStandardMaterial side={DoubleSide} map={botTexture} />
        </mesh>

        {/* Верхняя грань */}
        <mesh position={[0, 0.75, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1, 0.1]} />
          <meshStandardMaterial map={pagesTexture} side={DoubleSide} />
        </mesh>

        {/* Нижняя грань */}
        <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1, 0.1]} />
          <meshStandardMaterial map={pagesTexture} side={DoubleSide} />
        </mesh>

        {/* Правая грань (переплет страниц) */}
        <mesh position={[0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.1, 1.5]} />
          <meshStandardMaterial map={pagesTexture} side={DoubleSide} />
        </mesh>
      </animated.group>
    </>
  );
};

export default Book;
