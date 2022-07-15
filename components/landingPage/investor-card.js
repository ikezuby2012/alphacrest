import Image from "next/image"

const InvestorCard = ({photo, name, amount}) => {
    return (
        <div className="investor-card">
            <figure className="investor-card-figure">
                <Image height={200} width={200} className="investor-card-img" src={photo} alt="expert_image" loading="lazy" />
                <figcaption className="investor-card-figcap">
                    <h3>{name}</h3>
                    <h4>{amount}</h4>
                </figcaption>
            </figure>
        </div>
    );
}

export default InvestorCard;
