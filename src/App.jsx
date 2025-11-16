import React, { useState, useEffect } from 'react';
import { useBMICalculator } from './hooks/useBMICalculator';
import { useLocalStorage } from './hooks/useLocalStorage';
import Card from './components/UI/Card';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CalculatorForm from './components/Calculator/CalculatorForm';
import CalculatorResult from './components/Calculator/CalculatorResult';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const {
    inputs,
    unit,
    result,
    updateInput,
    setUnit,
    calculate,
    resetCalculator
  } = useBMICalculator();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <Header 
          darkMode={darkMode} 
          onThemeToggle={() => setDarkMode(!darkMode)} 
        />
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Section */}
          <div className="space-y-6">
            <Card variant="glass" className="animate-slide-up">
              <CalculatorForm
                inputs={inputs}
                unit={unit}
                updateInput={updateInput}
                setUnit={setUnit}
                calculate={calculate}
                resetCalculator={resetCalculator}
                result={result}
              />
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result ? (
              <CalculatorResult result={result} unit={unit} />
            ) : (
              <Card variant="glass" className="text-center py-12 animate-fade-in">
                <div className="max-w-sm mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your height, weight, and age to get your BMI score and personalized health insights.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;