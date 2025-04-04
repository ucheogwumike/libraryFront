// import { Bar } from "react-chartjs-2";
// import { Pie } from "react-chartjs-2";
// import { FaBell, FaUpload } from "react-icons/fa";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const barData = {
//   labels: ["January", "February", "March"],
//   datasets: [
//     { label: "Pending", data: [700, 600, 500], backgroundColor: "#FFA500" },
//     { label: "In Progress", data: [400, 300, 200], backgroundColor: "#4285F4" },
//     { label: "Approved", data: [300, 200, 100], backgroundColor: "#4CAF50" },
//   ],
// };

// const pieData = {
//   labels: ["Pending", "Approved", "In Progress"],
//   datasets: [
//     {
//       data: [12524, 12524, 12524],
//       backgroundColor: ["#FFA500", "#4CAF50", "#4285F4"],
//     },
//   ],
// };

// const DashboardManagement = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">NALTF</h1>
//         <div className="flex items-center gap-4">
//           <FaBell className="w-6 h-6 cursor-pointer" />
//           <div className="flex items-center gap-2">
//             <img
//               src="/avatar.png"
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="font-semibold">Mike Adeneji</span>
//           </div>
//         </div>
//       </header>
      
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="p-4 bg-white shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">Total Document</h2>
//           <p className="text-2xl font-bold">1,000</p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">Pending Review</h2>
//           <p className="text-2xl font-bold">860</p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">In Progress</h2>
//           <p className="text-2xl font-bold">150</p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">Approved</h2>
//           <p className="text-2xl font-bold">150</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         <div className="p-6 bg-white shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Activities Chart</h2>
//           <Bar data={barData} />
//         </div>
//         <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
//           <h2 className="text-lg font-semibold mb-4">Processing Analysis</h2>
//           <Pie data={pieData} />
//         </div>
//       </div>

//       <div className="mt-6 flex gap-4">
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
//           <FaUpload className="w-4 h-4" /> Upload New Document
//         </button>
//         <button className="border border-gray-400 px-4 py-2 rounded-lg">Review Pending (6)</button>
//       </div>
//     </div>
//   );
// };

// export default DashboardManagement;

import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import SideMenu from '../components/SideMenu';


// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Data for the bar chart
const barChartData = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Pending',
      data: [800, 600, 400],
      backgroundColor: '#F59E0B',
    },
    {
      label: 'In Progress',
      data: [600, 800, 200],
      backgroundColor: '#3B82F6',
    },
    {
      label: 'Approved',
      data: [400, 500, 600],
      backgroundColor: '#10B981',
    },
  ],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 1000,
    },
  },
};

// Data for the donut chart
const donutChartData = {
  labels: ['Pending', 'In Progress', 'Approved'],
  datasets: [
    {
      data: [12224, 12224, 12224], // Placeholder values; adjust as needed
      backgroundColor: ['#F59E0B', '#3B82F6', '#10B981'],
      borderWidth: 0,
    },
  ],
};

const donutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: '70%',
};

const DashboardManagement: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-scroll">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center">
          <img src="/logo.png" alt="NALTF Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold">NALTF</span>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Start Digitization
          </a>
          <a href="#" className="block py-2 px-4 bg-green-600 text-white rounded">
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
        <SideMenu />

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

        {/* Stats Section */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-600">Total Document</h3>
              <p className="text-2xl font-bold">1,000</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-600">Pending Review</h3>
              <p className="text-2xl font-bold">860</p>
              <p className="text-sm text-gray-500">Documents awaiting processing</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-600">In Progress</h3>
              <p className="text-2xl font-bold">150</p>
              <p className="text-sm text-gray-500">Documents awaiting processing</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-600">Approved</h3>
              <p className="text-2xl font-bold">150</p>
              <p className="text-sm text-gray-500">Documents awaiting processing</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-600">Rejected</h3>
              <p className="text-2xl font-bold">300</p>
              <p className="text-sm text-gray-500">Docs that failed processing or were denied</p>
            </div>
          </div>
        </div>

        {/* Activities Chart */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Activities Chart</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-200 rounded">6 Months</button>
                <button className="px-3 py-1 bg-gray-200 rounded">3 Months</button>
                <button className="px-3 py-1 bg-gray-200 rounded">30 Days</button>
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <span>Pending</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                <span>In Progress</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Approved</span>
              </div>
            </div>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600 mb-4">Processing Analysis</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="w-32 h-32">
                <Doughnut data={donutChartData} options={donutChartOptions} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <span>Pending: 12,224 Document</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                <span>In Progress: 12,224 Document</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Approved: 12,224 Document</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-yellow-500 text-white rounded">Pending</button>
              <button className="px-3 py-1 bg-gray-200 rounded">Rejected</button>
              <button className="px-3 py-1 bg-green-600 text-white rounded">
                Upload New Document
              </button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded">
                Review Pending <span className="ml-1 bg-white text-orange-500 rounded-full px-2">6</span>
              </button>
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
                <td className="py-2 border p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Jane Smith</td>
                <td className="py-2 border p-2">Uploaded a new document</td>
                <td className="py-2 border p-2">Legal Contract.docx</td>
                <td className="py-2 border p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Sarah Okoro</td>
                <td className="py-2 border p-2">Rejected (Missing Signature)</td>
                <td className="py-2 border p-2">Tax Report_2024.pdf</td>
                <td className="py-2 border p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">IT System</td>
                <td className="py-2 border p-2">Granted access to a new user</td>
                <td className="py-2 border p-2">Invoice_009.pdf</td>
                <td className="py-2 border p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2 border p-2">2025-04-03 14:30 PM</td>
                <td className="py-2 border p-2">Paul Abiodun</td>
                <td className="py-2 border p-2">Edited document metadata</td>
                <td className="py-2 border p-2">Policy_123.pdf</td>
                <td className="py-2 border p-2 text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardManagement;
