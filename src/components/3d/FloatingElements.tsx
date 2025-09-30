'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingElementsProps {
  darkMode?: boolean;
  className?: string;
}

const FloatingElements = ({ darkMode = false, className = '' }: FloatingElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      if (darkMode) {
        colors[i * 3] = 0.2 + Math.random() * 0.8;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.6;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.3;
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({ 
      size: 0.1, 
      vertexColors: true, 
      transparent: true, 
      blending: THREE.AdditiveBlending, 
      depthWrite: false 
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const geometries: THREE.Mesh[] = [];
    const geometryPositions: [number, number, number][] = [
      [-3, 2, 0],
      [3, -1, -2],
      [0, 3, -1]
    ];

    geometryPositions.forEach((position, index) => {
      const geometry = new THREE.IcosahedronGeometry(0.5, 1);
      const material = new THREE.MeshStandardMaterial({
        color: darkMode ? 0x06b6d4 : 0xf97316,
        transparent: true,
        opacity: 0.6,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.userData = {
        originalY: position[1],
        rotationSpeed: [0.5, 0.8, 0.3][index],
      };
      scene.add(mesh);
      geometries.push(mesh);
    });

    const clock = new THREE.Clock();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const deltaTime = clock.getDelta();

      particles.rotation.x += deltaTime * 0.1;
      particles.rotation.y += deltaTime * 0.15;

      geometries.forEach((mesh) => {
        mesh.rotation.x += deltaTime * mesh.userData.rotationSpeed;
        mesh.rotation.y += deltaTime * mesh.userData.rotationSpeed * 0.5;
        mesh.position.y = mesh.userData.originalY + Math.sin(elapsedTime) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (renderer && container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      
      if (scene) {
        scene.traverse((object) => {
          if ((object as THREE.Mesh).geometry) {
            (object as THREE.Mesh).geometry.dispose();
          }
          if ((object as THREE.Mesh).material) {
            const material = (object as THREE.Mesh).material;
            if (Array.isArray(material)) {
              material.forEach(mat => mat.dispose());
            } else {
              material.dispose();
            }
          }
        });
      }
    };
  }, [darkMode]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '100%' }}
    />
  );
};

export default FloatingElements;