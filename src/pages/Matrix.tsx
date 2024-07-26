import Chart from 'chart.js/auto';
import { Navbar } from '../components/Navbar';
import { useEffect } from 'react';
import annotationPlugin from 'chartjs-plugin-annotation';
import "../css/Matrix.css";

Chart.register(annotationPlugin);

type DataPoint = {
  x: number;
  y: number;
  name: string;
}

const Matrix = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'LLMs',
          data: [{
            x: 2.6909666666666663,
            y: 3.3176190476190475,
            name: 'GPT-4'
          }, {
              x: 2.421198333333333,
            y: 3.1,
              name: 'Llama 3'
            }, {
              x: 1.6496606666666669,
            y: 2.658333333333333,
              name: 'Gemini'
            }, {
              x: 1.3825271351575457,
            y: 1.258333333333333,
              name: 'GPT-J'
            }, {
              x: 2.969774735632184,
            y: 3.6945,
              name: 'BloombergGPT'
            }, {
              x: 2.749,
            y: 1.9566666666666668,
              name: 'EXAONE 2.0'
            }]
        }]
      },
      options: {
        scales: {
          x: {
            min: 0,
            max: 4,
            title: {
              display: true,
              text: 'Business Readiness'
            }
          },
          y: {
            min: 0,
            max: 4,
            title: {
              display: true,
              text: 'Perceived Business Value'
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                xMin: 2,
                xMax: 2,
                borderColor: 'black',
                borderWidth: 2,
                label: {
                  content: 'Vertical Line',
                  position: 'center'
                }
              },
              line2: {
                type: 'line',
                yMin: 2,
                yMax: 2,
                borderColor: 'black',
                borderWidth: 2,
                label: {
                  content: 'Horizontal Line',
                  position: 'center'
                }
              },
              label1: {
                type: 'label',
                xValue: 0,
                yValue: 4.0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                content: 'Low Performance & High Potential',
                color: 'white',
                font: {
                  size: 12
                },
                position: 'start'
              },
              label2: {
                type: 'label',
                xValue: 3.5,
                yValue: 4.0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                content: 'High Performance & High Potential',
                color: 'white',
                font: {
                  size: 12
                },
                position: 'start'
              },
              label3: {
                type: 'label',
                xValue: 0.5,
                yValue: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                content: 'Low Performance & Low Potential',
                color: 'white',
                font: {
                  size: 12
                },
                position: 'end'
              },
              label4: {
                type: 'label',
                xValue: 4,
                yValue: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                content: 'Low Performance & High Potential',
                color: 'white',
                font: {
                  size: 12
                },
                position: 'end'
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const dataPoint = context.raw as DataPoint;
                return `${dataPoint.name}: (${dataPoint.x}, ${dataPoint.y})`;
              }
            }
          }
        }
      }
    });
    return () => chart.destroy();
  }, []);

  return (
    <>
    <Navbar />
    <div className="chart-container">
      <canvas id="myChart"></canvas>
    </div>
    <div className="matrix-table-container">
      <table className="criteriaTable">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Business Readiness</td>
          </tr>
          <tr>
            <td>Credibility</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Harmfulness</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Benchmark</td>
            <td>15%</td>
          </tr>
          <tr className="highlight">
            <td>Perceived Business Value</td>
            <td></td>
          </tr>
          <tr>
            <td>Capability</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Success Stories</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Popularity</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
  );
}

export default Matrix;