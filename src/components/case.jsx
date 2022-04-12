/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const Case = () => {
  const { singleCase } = useSelector((state) => state.cases);
  //   const { regions } = singleCase;
  console.log('Myffffffff', singleCase);
  //   const Regions = regions[0].regions.map((item) => (
  //     <div key={item.id}>{item.name}</div>
  //   ));
  return (
    <div>
      <p>{singleCase[0]?.id}</p>
      <p>{singleCase[0]?.name}</p>
      <p>{singleCase[0]?.today_confirmed}</p>
      {/* <p>{Regions}</p> */}
    </div>
  );
};

export default Case;
