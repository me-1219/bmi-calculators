import React from 'react';
import Button from '../UI/Button';

const UnitToggle = ({ unit, onUnitChange }) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-xl ">
      <Button
        variant={unit === 'metric' ? 'primary' : 'ghost'}
        size="lg"
        onClick={() => onUnitChange('metric')}
        className="flex-1 "
      >
        Metric (m/kg)
      </Button>
      <Button
        variant={unit === 'imperial' ? 'primary' : 'ghost'}
        size="lg"
        onClick={() => onUnitChange('imperial')}
        className="flex-1"
      >
        Imperial (ft/lbs)
      </Button>
    </div>
  );
};

export default UnitToggle;