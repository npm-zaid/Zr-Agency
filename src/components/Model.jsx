import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Stats from './Stats';
 import Team from './Team';
 import CallToAction from './CallToAction';
 import Work from './Work';

import plane from '../model/stylized_ww1_plane.glb';

const Model = () => {
  const canvasRef = useRef();
  const ModelRef = useRef();
  const isRotating = useRef(false);
  const mixerRef = useRef(null);

  // Define desktop positions (same as your original, adjusted previously)
  const DesktopPositions = [
    { id: 'first', position: { x: 2, y: 1, z: -1.2 }, rotation: { x: -0.2, y: -1, z: -0.6 } },
    { id: 'second', position: { x: -4, y: -0.8, z: 0 }, rotation: { x: -0.3, y: -0.01, z: 0 } },
    { id: 'third', position: { x: -5, y: -1, z: -1 }, rotation: { x: -0.3, y: 1.7, z: 0 } },
    { id: 'fourth', position: { x: 5, y: -1, z: -1 }, rotation: { x: -0.3, y: 0, z: 0.4 } },
    { id: 'fifth', position: { x: 5, y: -1.4, z: -1 }, rotation: { x: -0.3, y: -1.8, z: -0.3 } },
       { id: 'sixth', position: { x: 0, y: -1.4, z: -3 }, rotation: { x: 1, y: 0, z: 0} },
  { id: 'seventh', position: { x: 0, y: -2, z: -3 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'eighth', position: { x: 0, y: 0, z: 7 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'nine', position: { x: 0, y: -2, z: -3 }, rotation: { x: 1, y: 0, z: 0 } },
    { id: 'ten', position: { x: 0, y: -2, z: -3 }, rotation: { x: 1, y: 0, z: 0 } },
  ];

  // Define mobile positions (compact flight path)
  const MobilePositions = [

    { id: 'first', position: { x: 0, y: .8, z: -3 }, rotation: { x: -0.1, y: -.3, z: 0 } },
    
    { id: 'second', position: { x: -2, y: -2, z: -4.5}, rotation: { x: -0.1, y: Math.PI / 2, z: -0.1 } },
   
    { id: 'third', position: { x: -2, y: -1.6, z: -4.5}, rotation: { x: -0.8, y: .5, z: 0.1 } },

    { id: 'fourth', position: { x: 2, y: -2, z: -4.5}, rotation: { x: -0.1, y: -Math.PI / 2, z: -0.1 } },
 
    { id: 'fifth', position: { x: 2, y: -2, z: -4.5}, rotation: { x: -0.1, y: -.3, z: -0.1 }  },

       { id: 'sixth', position: { x: 0, y: -2.1, z: -6 }, rotation: { x: 1, y: 0, z: 0} },
   
   { id: 'seventh', position: { x: 0, y: -2, z: -3 }, rotation: { x: 0, y: 0, z: 0 } },
  
    { id: 'eighth', position: { x: 0, y: 0, z: 5 }, rotation: { x: 0, y: 0, z: 0 } },

  ];

  // Detect if the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update device type on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Select positions based on device type
  const ActivePositions = isMobile ? MobilePositions : DesktopPositions;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Adjust camera position for mobile
    camera.position.set(0, 1.5, isMobile ? 4 : 5); // Closer on mobile

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputEncoding = THREE.sRGBEncoding;

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/venice_sunset_1k.hdr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      },
      undefined,
      (error) => {
        console.error('Error loading HDRi:', error);
      }
    );

    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    const clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load(
      plane,
      (gltf) => {
        const model = gltf.scene;
        // Set initial position based on device type
        const initialPosition = ActivePositions[0].position;
        const initialRotation = ActivePositions[0].rotation;
        model.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
        model.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
        model.scale.set(isMobile ? 2 : 3, isMobile ? 2 : 3, isMobile ? 2 : 3); // Smaller scale on mobile
        model.castShadow = true;
        model.receiveShadow = true;

        if (gltf.animations && gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(model);
          const action = mixerRef.current.clipAction(gltf.animations[0]);
          action.play();
          console.log('Animations found:', gltf.animations);
        } else {
          console.log('No animations found in GLTF model');
        }

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.envMapIntensity = 1.0;
            }
          }
        });

        ModelRef.current = model;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading GLB:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      controls.update();

      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', () => {});
      renderer.dispose();
    };
  }, [isMobile]); // Re-run effect if isMobile changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isRotating.current = entry.isIntersecting;
      },
      { threshold: 0.5 }
    );

    const seventh = document.getElementById('seventh');
    if (seventh) observer.observe(seventh);

    return () => {
      if (seventh) observer.unobserve(seventh);
    };
  }, []);

  const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        currentSection = section.id;
      }
    });

    const active = ActivePositions.find((val) => val.id === currentSection);
    if (active && ModelRef.current) {
      gsap.to(ModelRef.current.position, {
        ...active.position,
        duration: 1.2,
        ease: 'power2.out',
      });
      gsap.to(ModelRef.current.rotation, {
        ...active.rotation,
        duration: 1.2,
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', modelMove);
    return () => window.removeEventListener('scroll', modelMove);
  }, [ActivePositions]); // Re-run if ActivePositions changes

  return (
    <>
      <canvas
        className="fixed inset-0 z-50 pointer-events-none"
        ref={canvasRef}
      ></canvas>

      <div id="first" className="w-full min-h-screen section"><Hero/></div>
      <div id="second" className="w-full min-h-screen section"><About/></div>
      <div id="third" className="w-full min-h-screen section "><Services/></div>
      <div id="fourth" className="w-full min-h-screen section "><Work/></div>
      <div id="fifth" className="w-full  section "><Stats/></div>
      <div id="sixth" className="w-full min-h-screen section"><Testimonials/></div>
      <div id="seventh" className="w-full section "><CallToAction/></div>
      <div id="eighth" className="w-full section "><Contact/></div>
    
    </>
  );
};

export default Model;