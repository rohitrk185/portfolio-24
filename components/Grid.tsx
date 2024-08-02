import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

type Props = {};

const Grid = (props: Props) => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              className,
              img,
              imgClassName,
              titleClassName,
              description,
              spareImg,
            },
            index
          ) => (
            <BentoGridItem
              key={id}
              id={id}
              className={className}
              title={title}
              description={description}
              header={undefined}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
