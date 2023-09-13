"use client";
//@ts-ignore
import Zdog from "zdog";
import { useRef, useEffect } from "react";

export default function Logo({ zoom }: { zoom: number }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    // rotating flag variable
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: canvasRef.current,
      resize: true,
      zoom,
      dragRotate: true,
      // stop rotation when dragging starts
      onDragStart: () => {
        isSpinning = false;
      },
      onDragEnd: () => {
        isSpinning = true;
      },
    });

    // add circle
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: "#636",
    });

    function animate() {
      // rotate
      if (isSpinning) {
        illo.rotate.y += 0.03;
      }
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <svg
      ref={canvasRef}
      className="block w-full"
      width={"800"}
      height={"500"}
    ></svg>
  );
}
