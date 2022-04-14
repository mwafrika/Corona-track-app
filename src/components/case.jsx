/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCases } from '../redux/actions';

const Case = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleCase } = useSelector((state) => state.cases);

  useEffect(() => {
    dispatch(getSingleCases(id));
  }, [dispatch, id]);

  const RenderData = () => (
    <div>
      {Object.keys(singleCase).map((key) => (
        <div key={key}>
          <p>{singleCase[key].name}</p>
          <p>{singleCase[key].today_confirmed}</p>
          {singleCase[key].regions.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.today_confirmed}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Welcome details</h1>
      <RenderData />
    </div>
  );
};

export default Case;
