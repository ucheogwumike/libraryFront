// 
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import SideMenu from '../components/SideMenu';
import StartDigitizationModal from '../components/StartDigitizationModal';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Data for the line chart
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Activities',
      data: [5000, 10000, 8000, 12000, 15000, 10000, 20000],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (tickValue: string | number) {
          if (typeof tickValue === 'number') {
            return `${tickValue / 1000}K`;
          }
          return tickValue;
        },
      },
    },
  },
};

const DashboardLibrary: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-scroll">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center">
          <img src="/logo.png" alt="NALTF Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold">NALTF</span>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 bg-green-600 text-white rounded">
            Start Digitization
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Document Processing
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Storage & Versioning
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Quality Assurance
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Access & Retrieval
          </a>
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Settings
          </a>
        </nav>
      </div> */}
      <SideMenu/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-1/3 p-2 border rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <button className="mr-4">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="mr-4">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <img
                src="/user.png"
                alt="User"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>Mike Adeniji</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Total Document</h3>
            <div className="flex items-center justify-center my-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-green-500"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="83.4, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">1,000</span>
                </div>
              </div>
            </div>
            <p className="text-center text-green-500">80.34%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Pending Document</h3>
            <div className="flex items-center justify-center my-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-orange-500"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50.34, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">800</span>
                </div>
              </div>
            </div>
            <p className="text-center text-orange-500">50.34%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Rejected Document</h3>
            <div className="flex items-center justify-center my-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-red-500"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="50.34, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">300</span>
                </div>
              </div>
            </div>
            <p className="text-center text-red-500">50.34%</p>
          </div>
        </div>

        <div>
            <button onClick={() => setIsModalOpen(true)} className='mb-4 bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-bold'>
                Start Digitization
            </button>
        </div>

        {/* Activities and Digitization Breakdown */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Activities</h3>
              <div>
                <button className="mr-2 px-3 py-1 bg-gray-200 rounded">This week</button>
                <button className="px-3 py-1 bg-gray-200 rounded">Export</button>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">2000</span>
              <span className="ml-2 text-red-500">▼ 4.3% Down from yesterday</span>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="bg-green-800 text-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Digitization</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span>Legal</span>
                  <span>65% <span className="text-green-400">▲ 12%</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Financial</span>
                  <span>50% <span className="text-green-400">▲ 10%</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Administrative</span>
                  <span>23% <span className="text-green-400">▲ 8%</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Public Records</span>
                  <span>23% <span className="text-green-400">▲ 8%</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded">All</button>
              <button className="px-3 py-1 bg-gray-200 rounded">Pending</button>
              <button className="px-3 py-1 bg-gray-200 rounded">Rejected</button>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded">Apply filter</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 bg-gray-100">
                <th className="py-2 border p-2">Date & Time</th>
                <th className="py-2 border p-2">User</th>
                <th className="py-2 border p-2">Action</th>
                <th className="py-2 border p-2">Document</th>
                <th className="py-2 border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Mike Adewole</td>
                <td className="py-2 border p-2">Approved</td>
                <td className="py-2 border p-2">Financial Report.pdf</td>
                <td className="py-2 border p-2 text-green-500">✔ Approved</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Jane Smith</td>
                <td className="py-2 border p-2">Uploaded a new document</td>
                <td className="py-2 border p-2">Legal Contract.docx</td>
                <td className="py-2 border p-2 text-blue-500">⬆ Uploaded</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Sarah Okoro</td>
                <td className="py-2 border p-2">Rejected (Missing Signature)</td>
                <td className="py-2 border p-2">Tax Report_2024.pdf</td>
                <td className="py-2 border p-2 text-red-500">✖ Rejected</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">IT System</td>
                <td className="py-2 border p-2">Granted access to a new user</td>
                <td className="py-2 border p-2">Invoice_009.pdf</td>
                <td className="py-2 border p-2 text-yellow-500">⚠ Access Granted</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2"> Biodun</td>
                <td className="py-2 border p-2">Edited document metadata</td>
                <td className="py-2 border p-2">Policy_123.pdf</td>
                <td className="py-2 border p-2 text-gray-500">⏳ Processing</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-green-600 text-white rounded">1</button>
              <button className="px-3 py-1 bg-gray-200 rounded">2</button>
              <button className="px-3 py-1 bg-gray-200 rounded">3</button>
              <span>...</span>
              <button className="px-3 py-1 bg-gray-200 rounded">8</button>
              <button className="px-3 py-1 bg-gray-200 rounded">9</button>
              <button className="px-3 py-1 bg-gray-200 rounded">10</button>
            </div>
            <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>
      {isModalOpen && <StartDigitizationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DashboardLibrary;