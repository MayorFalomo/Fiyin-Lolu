'use client';
import { useEffect, useState } from 'react';

const useDaysLeft = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  const calculateDaysLeft = () => {
    const weddingDate = new Date('2025-12-13');
    const today = new Date();

    const difference = weddingDate.getTime() - today.getTime();

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    setDaysLeft(days >= 0 ? days : 0);
  };

  useEffect(() => {
    calculateDaysLeft();

    const intervalId = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return daysLeft;
};

export default useDaysLeft;
