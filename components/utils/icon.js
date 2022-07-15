import Image from "next/image";

const Icon = (prop) => {
//    console.log(prop, props, name);
   return (
      <Image
         src={prop?.name !== undefined ? require(`cryptocurrency-icons/svg/color/${prop.name}.svg`) : require(`cryptocurrency-icons/svg/color/btc.svg`)}
         alt={`${prop.name} logo`}
         height={prop.size}
         width={prop.size}
         {...prop}
      />
   );
};

export default Icon;
