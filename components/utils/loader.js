import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
   let loading = useRef(null);
   let loadingWrapper = useRef(null);
   let loadingProgress = useRef(null);

   useEffect(() => {
      const timeline = gsap.timeline({
         ease: "Expo.easeOutIn",
         duration: 1,
         delay: 0
      });

      timeline.play(0);
      timeline.fromTo(
         loading.current,
         {
            width: "0vw",
            opacity: 0
         },
         {
            width: "99vw",
            opacity: 1,
            duration: 0.8
         }
      );

      timeline.fromTo(
         loadingWrapper.current,
         { y: "-30px", opacity: 0 },
         { y: 0, opacity: 1 }
      );

      timeline.fromTo(
         loadingProgress.current,
         { width: "0%" },
         { width: "100%", duration: 2.3 }
      );
   });
   return (
      <div className="loading" ref={loading}>
         <p style={{ color: "black" }}>loading</p>
         <div className="loading-wrapper" ref={loadingWrapper}>
            <div className="loading-progress" ref={loadingProgress} />
         </div>
      </div>
   );
};

export default Loader;
