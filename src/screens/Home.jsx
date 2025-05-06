import React, { useState } from 'react';
import Logo from '../assets/Logo.webp';

const Home = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dob: '1985-05-15',
      subscriberId: '1234567890',
      relationship: 'self',
      medicareAdvantage: 'No',
      planType: 'PPO',
      fundingType: 'Fully Insured',
      status: 'Active',
      secondaryPayer: 'No',
      secondaryPayerName: '',
      dmeCoverage: ['Covered', 'Covered', 'Not Covered', 'Covered'],
      priorAuthRequired: ['Yes', 'No', 'No', 'Yes'],
      inNetworkOOPMax: '$2500.00',
      inNetworkDeductible: '$500.00',
      outOfNetworkOOPMax: '$5000.00',
      outOfNetworkDeductible: '$1000.00',
      outOfNetworkCoinsurance: '30%',
      specialistCopay: '$40.00',
      pricingRate: '80th Percentile of UCR',
      percentage: '80%',
      repInfo: 'Sarah K, Ref#12345'
    }
  ]);

  const [newPatient, setNewPatient] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    subscriberId: '',
    relationship: '',
    medicareAdvantage: '',
    planType: '',
    fundingType: '',
    status: '',
    secondaryPayer: '',
    secondaryPayerName: '',
    dmeCodes: ['L0648', 'L0650', 'L0651', 'L0180'],
    priorAuthRequired: [],
    inNetworkOOPMax: '',
    inNetworkDeductible: '',
    outOfNetworkOOPMax: '',
    outOfNetworkDeductible: '',
    outOfNetworkCoinsurance: '',
    specialistCopay: '',
    pricingRate: '',
    percentage: '',
    repInfo: ''
  });

  const [showForm, setShowForm] = useState(false);
//   const [currentView, setCurrentView] = useState('list'); 
//   const [selectedPatient, setSelectedPatient] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatientWithId = { ...newPatient, id: patients.length + 1 };
    setPatients([...patients, newPatientWithId]);
    setNewPatient({
      firstName: '',
      lastName: '',
      dob: '',
      subscriberId: '',
      relationship: '',
      medicareAdvantage: '',
      planType: '',
      fundingType: '',
      status: '',
      secondaryPayer: '',
      secondaryPayerName: '',
      dmeCodes: ['L0648', 'L0650', 'L0651', 'L0180'],
      priorAuthRequired: [],
      inNetworkOOPMax: '',
      inNetworkDeductible: '',
      outOfNetworkOOPMax: '',
      outOfNetworkDeductible: '',
      outOfNetworkCoinsurance: '',
      specialistCopay: '',
      pricingRate: '',
      percentage: '',
      repInfo: ''
    });
    setShowForm(false);
  };

//   const viewPatientDetails = (patient) => {
    // setSelectedPatient(patient);
    // setCurrentView('detail');
//   };

  return (
    <div className="min-h-screen">
        {/* Navbar and logo */}
      <div>       
        <div className=" flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={Logo} 
              alt="MVM Health Logo" 
              className="h-20"
            />
            <h1 className="text-2xl font-bold ml-4">Insurance Eligibility Checker</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200">Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-200">Patients</a></li>
              <li><a href="#" className="hover:text-blue-200">Reports</a></li>
            </ul>
          </nav>
        </div>
      </div>
{/* MAin div */}
      <div>
        {/* {currentView === 'list' ? ( */}
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-blue-900">Patient Records</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md shadow"
              >
                {showForm ? 'Cancel' : 'Add New Patient'}
              </button>
            </div>

            {showForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">New Patient Information</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <h4 className="font-medium text-blue-800">Basic Information</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={newPatient.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={newPatient.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={newPatient.dob}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Subscriber ID</label>
                      <input
                        type="text"
                        name="subscriberId"
                        value={newPatient.subscriberId}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-blue-800">Insurance Information</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Relationship to Insured</label>
                      <select
                        name="relationship"
                        value={newPatient.relationship}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="son">Son</option>
                        <option value="spouse">Spouse</option>
                        <option value="daughter">Daughter</option>
                        <option value="child">Child</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Medicare Advantage Plan?</label>
                      <select
                        name="medicareAdvantage"
                        value={newPatient.medicareAdvantage}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Plan Type</label>
                      <select
                        name="planType"
                        value={newPatient.planType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="POS">POS</option>
                        <option value="PPO">PPO</option>
                        <option value="HMO">HMO</option>
                        <option value="EPO">EPO</option>
                        <option value="SHBP">SHBP</option>
                        <option value="Direct Access">Direct Access</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Funding Type</label>
                      <select
                        name="fundingType"
                        value={newPatient.fundingType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Self Funded">Self Funded</option>
                        <option value="Fully Insured">Fully Insured</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md shadow"
                    >
                      Check Eligibility
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50 text-left">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Date of Birth
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Subscriber ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Plan Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-left">
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{patient.firstName} {patient.lastName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{patient.dob}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{patient.subscriberId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{patient.planType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                        //   onClick={() => viewPatientDetails(patient)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        {/* ) : ( */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              onClick={() => setCurrentView('list')}
              className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
            >
              Back to Patients
            </button>
            
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Patient Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-4 border-b pb-2">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Patient Name</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.firstName} {selectedPatient.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Subscriber ID</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.subscriberId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Relationship to Insured</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.relationship}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-4 border-b pb-2">Insurance Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Medicare Advantage Plan</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.medicareAdvantage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Plan Type</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.planType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Funding Type</p>
                    <p className="mt-1 text-sm text-gray-900">{selectedPatient.fundingType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <p className={`mt-1 text-sm ${selectedPatient.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedPatient.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Secondary Payer</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedPatient.secondaryPayer} {selectedPatient.secondaryPayerName && `(${selectedPatient.secondaryPayerName})`}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-blue-800 mb-4 border-b pb-2">DME Coverage</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                          DME Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                          Covered
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                          Prior Auth Required
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedPatient.dmeCodes.map((code, index) => (
                        <tr key={code}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {code}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${selectedPatient.dmeCoverage[index] === 'Covered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {selectedPatient.dmeCoverage[index]}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${selectedPatient.priorAuthRequired[index] === 'Yes' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                              {selectedPatient.priorAuthRequired[index]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-800 mb-4 border-b pb-2">Financial Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">In Network OOP Max Remaining</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.inNetworkOOPMax}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">In Network Deductible Remaining</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.inNetworkDeductible}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Out of Network OOP Max Remaining</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.outOfNetworkOOPMax}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Out of Network Deductible Remaining</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.outOfNetworkDeductible}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Out of Network Coinsurance</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.outOfNetworkCoinsurance}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Specialist Copay</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.specialistCopay}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-800 mb-4 border-b pb-2">Pricing Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Pricing Rate</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.pricingRate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Percentage</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.percentage}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Representative Info</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedPatient.repInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* )} */}
      </div>
{/* fotter */}
      {/* <div className="bg-blue-900 text-white py-6">
        <div className="">
          <div className="flex justify-center mb-4">
            <img 
              src="https://mvmhealth.com/wp-content/uploads/2023/03/mvm-logo-white.png" 
              alt="MVM Health Logo" 
              className="h-10"
            />
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} MVM Health. All rights reserved.</p>
        </div>
      </div> */}

  

    </div>
  );
};

export default Home;