import React from 'react';
import './TrendCard.css';
import { TrendData } from '../Data/TrendData';
import { useNavigate } from 'react-router-dom';

const TrendCard = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goToHome = () => {
    navigate('/'); // This will navigate to the home page
  };
  return (
    <div className='TrendCard'>
      <button className="button home-button"onClick={goToHome}>Back</button>
      <h3>Trending for you</h3>

      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k Shares</span>
          </div>
        )
      })}

    </div>
  )
}

export default TrendCard
