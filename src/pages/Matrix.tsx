import Chart from 'chart.js/auto';
import { Navbar } from '../components/Navbar';
import { useEffect } from 'react';
import 'chartjs-plugin-annotation'; // Import the plugin

const Matrix = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: 0,
            y: 0
          }, {
            x: 3.0,
            y: 5.0
          }, {
            x: 4.0,
            y: 2.5
          }]
        }]
      },
    });
    return () => chart.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <canvas id="myChart"></canvas>
    </>
  );
}

export default Matrix;