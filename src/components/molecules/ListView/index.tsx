import React, { useState } from 'react';
import { List, Space } from 'antd';
import {
  LinkOutlined,
  ClockCircleOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { ILivestream } from '@/type/types';

// const data = [
//   {
//     date: 'May 25, 2020',
//     description: 'Mastersons Mondaze',
//     id: '10HzYnVwLLuYjoV38zKT',
//     imageUrl:
//       'https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:150/jb7production-uploads/2020/04/mastersonsmondaze-stream-1200x675.jpg',
//     livestreamUrl: 'https://www.facebook.com/events/469270240488373',
//     time: '6:00 pm EDT / 3:00 pm PDT',
//     title: 'The Mastersons Livestream',
//   },
//   {
//     date: 'May 25, 2020',
//     description: 'Mastersons Mondaze',
//     id: '10HzYnVwLLuYjoV38zKT',
//     imageUrl:
//       'https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10:150/jb7production-uploads/2020/04/mastersonsmondaze-stream-1200x675.jpg',
//     livestreamUrl: 'https://www.facebook.com/events/469270240488373',
//     time: '6:00 pm EDT / 3:00 pm PDT',
//     title: 'The Mastersons Livestream',
//   },
// ];

interface IListViewProps {
  title: string;
  loading?: boolean;
  data: ILivestream[];
}

interface IImageboxProps {
  src?: string;
}
const ListViewContainer = styled.div`
  h1 {
    padding-left: 1rem;
  }
`;

const Imagebox = styled.div`
  /* background-color: red; */
  background-size: cover;
  background-color: red;
  height: 10rem;
  width: 20rem;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;

// @ts-ignore
const IconText = ({ Icon, text }) => (
  <Space>
    <Icon />
    {text}
  </Space>
);

const Image: React.FunctionComponent<{ imageUrl?: string }> = ({
  imageUrl,
}) => (
  <Imagebox>{imageUrl ? <img src={imageUrl} alt="photo123" /> : null}</Imagebox>
);

const ListView: React.FunctionComponent<IListViewProps> = ({ data, title }) => (
  // const [itemImageisOpen, openItemImage] = useState<string | undefined>(
  //   undefined,
  // );

  // const onClickHandler = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   id: string,
  // ) => {
  //   if (itemImageisOpen === id) {
  //     openItemImage(undefined);
  //   } else {
  //     openItemImage(id);
  //   }
  // };

  <ListViewContainer>
    <List
      itemLayout="vertical"
      size="small"
      grid={{ gutter: 16, column: 2 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          id={item.id}
          // onClick={(e) => onClickHandler(e, item.id)}
          actions={[
            <a href={item.livestreamUrl}>
              <IconText
                Icon={LinkOutlined}
                text="Link To Event"
                key="list-vertical-star-o"
              />
            </a>,
            <IconText
              Icon={ClockCircleOutlined}
              text={`Time: ${item.time}`}
              key="list-vertical-like-o"
            />,
            <IconText
              Icon={LikeOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Image imageUrl={item.imageUrl} />}
            title={item.title}
            description={item.extra || item.description}
          />
        </List.Item>
      )}
    />
  </ListViewContainer>
);
export default ListView;
