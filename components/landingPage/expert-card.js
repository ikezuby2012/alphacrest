import Image from "next/image";
const ExpertCard = ({ photo, name, job }) => {
   return (
      <div className="expert-card">
         <figure className="expert-card-figure">
            <Image
               className="expert-card-img"
               height={200}
               width={200}
               src={photo}
               alt="expert_image"
               loading="lazy"
            />
            <figcaption className="expert-card-figcap">
               <h3>{name}</h3>
               <h4>{job}</h4>
            </figcaption>
         </figure>
      </div>
   );
};

export default ExpertCard;
