import React, { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  filter: string;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [counter, setCounter] = useState(0);

  const randomLeaf = (id: number): Leaf => ({
    // atributos del componente
    id,
    left: Math.random() * 100,
    size: 20 + Math.random() * 40,
    duration: 4 + Math.random() * 6,
    delay: 0,
    rotation: Math.random() * 360,
    filter: `hue-rotate(${Math.random() * 360}deg) saturate(${
      1 + Math.random() * 1.5
    }) brightness(${0.7 + Math.random() * 0.6})`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaves((prev) => [...prev, randomLeaf(counter)]);
      setCounter((c) => c + 1);
    }, 1500); // Nueva hoja cada 1,5 segundos

    return () => clearInterval(interval);
  }, [counter]);

  const handleAnimationEnd = (id: number) => {
    setLeaves((prev) =>
      prev.map((leaf) => (leaf.id === id ? randomLeaf(id) : leaf))
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src="/img/brotarte_hoja.svg"
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            transform: `rotate(${leaf.rotation}deg)`,
            filter: leaf.filter,
          }}
          onAnimationEnd={() => handleAnimationEnd(leaf.id)}
        />
      ))}
    </div>
  );
}
