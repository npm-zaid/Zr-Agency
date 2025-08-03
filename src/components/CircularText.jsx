import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Navbar from "../components/Navbar"
import Model from "../components/Model"

export default function CircularText() {
  const svgRef = useRef()
  const frameRef = useRef()
  const contentRef = useRef()
  const enterRef = useRef()
  const enterBgRef = useRef()
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const circleText = svgRef.current.querySelectorAll("text.circles__text")

    gsap.set(circleText, { transformOrigin: "50% 50%" })
    gsap.set([contentRef.current.children, frameRef.current.children], { opacity: 0 })
    gsap.set(enterRef.current, { pointerEvents: "none" })

    const startTL = gsap.timeline()
      .addLabel("start", 0)
      .to(circleText, {
        duration: 3,
        ease: "expo.inOut",
        rotation: i => (i % 2 ? 90 : -90),
        stagger: { amount: 0.4 },
      }, "start")
      .to([circleText, enterRef.current], {
        duration: 3,
        ease: "expo.inOut",
        startAt: { opacity: 0, scale: 0.8 },
        scale: 1,
        opacity: 1,
        stagger: { amount: 0.4 },
      }, "start")
      .add(() => {
        gsap.set(enterRef.current, { pointerEvents: "auto" })
      }, "start+=2")

    const enterMouseEnter = () => {
      gsap.killTweensOf([enterBgRef.current, circleText])
      gsap.to(enterBgRef.current, {
        duration: 1,
        ease: "expo",
        scale: 1.4,
      })
      gsap.to(circleText, {
        duration: 1,
        ease: "expo",
        scale: 1.15,
        rotation: i => (i % 2 ? "-=90" : "+=90"),
        opacity: 0.4,
      })
    }

    const enterMouseLeave = () => {
      gsap.to(enterBgRef.current, {
        duration: 1,
        ease: "expo",
        scale: 1,
      })
      gsap.to(circleText, {
        duration: 1,
        ease: "expo",
        scale: 1,
        rotation: i => (i % 2 ? "+=120" : "-=120"),
        opacity: 1,
        stagger: { amount: -0.2 },
      })
    }

    const enterClick = () => {
      startTL.kill()
      gsap.set(enterRef.current, { pointerEvents: "none" })
      enterRef.current.removeEventListener("mouseenter", enterMouseEnter)
      enterRef.current.removeEventListener("mouseleave", enterMouseLeave)

      gsap.set([frameRef.current, contentRef.current], { opacity: 1 })

      gsap.timeline()
        .addLabel("start", 0)
        .to(enterRef.current, {
          duration: 0.6,
          ease: "back.in",
          scale: 0.2,
          opacity: 0,
        }, "start")
        .to(circleText, {
          duration: 0.8,
          ease: "back.in",
          scale: 0,
          opacity: 0,
          stagger: { amount: -0.4 },
        }, "start")
        .to([contentRef.current.children, frameRef.current.children], {
          duration: 0.9,
          ease: "back.out",
          startAt: { opacity: 0, scale: 1.2 },
          scale: 1,
          opacity: 1,
          stagger: { amount: 0.3 },
          onComplete: () => setHasEntered(true),
        }, "start+=1.3")
    }

    enterRef.current.addEventListener("mouseenter", enterMouseEnter)
    enterRef.current.addEventListener("mouseleave", enterMouseLeave)
    enterRef.current.addEventListener("click", enterClick)
  }, [])

  return (
    <>
      <svg ref={svgRef} className="circles fixed inset-0 z-50" width="100%" height="100%" viewBox="0 0 1400 1400">
        <defs>
          <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
          <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
          <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
          <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
        </defs>
        <text className="circles__text circles__text--1">
          <textPath xlinkHref="#circle-1" textLength="2830">lets craft a better future and show the unreal things&nbsp;</textPath>
        </text>
        <text className="circles__text circles__text--2">
          <textPath xlinkHref="#circle-2" textLength="2001">lets craft a better future and show the unreal things&nbsp;</textPath>
        </text>
        <text className="circles__text circles__text--3">
          <textPath xlinkHref="#circle-3" textLength="1341">lets craft a better future and show the unreal things&nbsp;</textPath>
        </text>
        <text className="circles__text circles__text--4">
          <textPath xlinkHref="#circle-4" textLength="836">Zaid craft studio&nbsp;</textPath>
        </text>
      </svg>

      <div className="frame" ref={frameRef}>
        {hasEntered &&<Navbar />}
      </div>

      <div className="content relative z-30" ref={contentRef}>
        {hasEntered && <Model />}
      </div>

      <button className="enter z-50 fixed inset-0 flex items-center justify-center" ref={enterRef}>
        <div className="enter__bg absolute w-[200px] h-[200px] bg-gray-200 rounded-full scale-0" ref={enterBgRef}></div>
        <span className="enter__text relative text-white text-3xl font-bold">Enter</span>
      </button>
    </>
  )
}
