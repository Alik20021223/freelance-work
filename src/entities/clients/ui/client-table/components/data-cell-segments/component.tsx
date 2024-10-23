import { BadgeGroup } from "@consta/uikit/BadgeGroup";
import { TableRenderCell } from '@consta/table/Table';
import { Tooltip } from '@consta/uikit/Tooltip';
import { useRef, useState } from 'react';
import { Client, Badge } from "@entities/clients/types/types";

const DataCellSegments: TableRenderCell<Client> = (props) => {
  const { segments } = props.row;
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const moreAnchorRef = useRef<HTMLDivElement>(null);

  if (!segments || segments.length === 0) {
    return <div>Нет данных</div>;
  }

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="Text Text_size_m MixSpace MixSpace_pT_s MixSpace_pB_s px-3">
      <BadgeGroup
        items={segments}
        getItemKey={(badge: Badge) => badge.text}
        getItemLabel={(badge: Badge) => badge.text}
        getItemView={(badge: Badge) => badge.form}
        getItemStatus={(badge: Badge) => badge.color}
        fitMode="reduction"
        size="m"
        className="max-w-full flex justify-center items-center"
        moreRef={moreAnchorRef}
        moreAttributes={{
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }}
      />
      <Tooltip
        isOpen={isTooltipVisible}
        size="l"
        direction="upLeft"
        spareDirection="downStartLeft"
        anchorRef={moreAnchorRef}
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
        placeholder={'Нет сегментов'}
        style={{ zIndex: 100000 }}
      >
        <BadgeGroup
          items={segments}
          getItemKey={(badge: Badge) => badge.text}
          getItemLabel={(badge: Badge) => badge.text}
          getItemView={(badge: Badge) => badge.form}
          getItemStatus={(badge: Badge) => badge.color}
          fitMode="wrap"
          size="m"
          className="max-w-full flex justify-center items-center"
        />
      </Tooltip>
    </div>
  );
};

export default DataCellSegments
