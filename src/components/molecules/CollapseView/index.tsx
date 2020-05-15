import React, { useState } from 'react';
import { Collapse } from 'antd';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';

const { Panel } = Collapse;

type PanelDataType = { component: JSX.Element; title: string; count: number }[];

const generatePanels = (data: PanelDataType) => data.map((panelData, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <Panel
    header={panelData.title}
    key={index}
    extra={`${panelData.count} Events`}
    style={{ border: 'none', fontSize: '1.5em' }}
  >
    {panelData.component}
  </Panel>
));

const CollapseView: React.FunctionComponent<{ data: PanelDataType }> = ({
  data,
}) => {
  const [expandIconPosition, changeExpandIconPosition] = useState<
    ExpandIconPosition
  >('left');
  return (
    <Collapse
      style={{ width: '100%', backgroundColor: 'white' }}
      defaultActiveKey={['0']}
      bordered={false}
      // @ts-ignore
      onChange={(iconPosition: ExpandIconPosition) => changeExpandIconPosition(iconPosition)}
      expandIconPosition={expandIconPosition}
    >
      {generatePanels(data)}
    </Collapse>
  );
};

export default CollapseView;
