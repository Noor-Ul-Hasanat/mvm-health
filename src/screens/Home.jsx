import React, { useState } from 'react';
import Logo from '../assets/Logo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../Redux/Slices/AuthSlice';
import { patientActions } from '../Redux/Slices/patientSlice';

const Home = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients);
  
  const handellogout = () => {
    dispatch(AuthActions.logout());
  };

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
    dmeCoverage: {},
    priorAuth: {},
    outOfNetworkCoinsurance: '',
    inNetworkCopay: '',
    pricingRate: '',
    pricingPercentage: '',
    repFirstName: '',
    repLastNameInitial: '',
    refId: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatientWithId = { 
      ...newPatient, 
      id: patients.length + 1,
      dmeCoverage: ['Covered', 'Covered', 'Not Covered', 'Covered'],
      priorAuthRequired: ['Yes', 'No', 'No', 'Yes'],
      repInfo: `${newPatient.repFirstName} ${newPatient.repLastNameInitial}, Ref#${newPatient.refId}`
    };

    dispatch(patientActions.addPatient(newPatientWithId));

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
      dmeCoverage: {},
      priorAuth: {},
      outOfNetworkCoinsurance: '',
      inNetworkCopay: '',
      pricingRate: '',
      pricingPercentage: '',
      repFirstName: '',
      repLastNameInitial: '',
      refId: '',
    });
    setShowForm(false);
  };

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
              <li><button onClick={handellogout} className='hover:text-blue-800'>Log out</button></li>
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
                    <h4 className="font-semibold text-blue-800">Basic Information</h4>
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
                    <h4 className="font-semibold text-blue-800">Insurance Information</h4>
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Plan Status</label>
                      <select
                        name="status"
                        value={newPatient.status}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Self Funded">Active</option>
                        <option value="Fully Insured">Terminated</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Any Secondry Payer?</label>
                      <select
                        name="secondaryPayer"
                        value={newPatient.secondaryPayer}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Self Funded">Yes</option>
                        <option value="Fully Insured">NO</option>
                      </select>
                    </div>
                    {/* After Secondary Payer Field */}
<div>
  <label className="block text-sm font-medium text-gray-700">DME Codes Coverage (Out-of-network)</label>
  <div className="mt-2 space-y-2">
    {['L0648', 'L0650', 'L0651', 'L0180'].map(code => (
      <div key={code} className="flex items-center justify-between">
        <span className="text-sm">{code}</span>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name={`dme-${code}`}
              value="Covered"
              checked={newPatient.dmeCoverage[code] === 'Covered'}
              onChange={() => setNewPatient(prev => ({
                ...prev,
                dmeCoverage: {...prev.dmeCoverage, [code]: 'Covered'}
              }))}
              className="h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm">Covered</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name={`dme-${code}`}
              value="Not Covered"
              checked={newPatient.dmeCoverage[code] === 'Not Covered'}
              onChange={() => setNewPatient(prev => ({
                ...prev,
                dmeCoverage: {...prev.dmeCoverage, [code]: 'Not Covered'}
              }))}
              className="h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm">Not Covered</span>
          </label>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Prior Authorization */}
<div>
  <label className="block text-sm font-medium text-gray-700">Prior Authorization Required</label>
  <div className="mt-2 space-y-2">
    {Object.entries(newPatient.dmeCoverage).map(([code, status]) => (
      status === 'Covered' && (
        <div key={code} className="flex items-center justify-between">
          <span className="text-sm">{code}</span>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name={`pa-${code}`}
                value="Yes"
                checked={newPatient.priorAuth[code] === 'Yes'}
                onChange={() => setNewPatient(prev => ({
                  ...prev,
                  priorAuth: {...prev.priorAuth, [code]: 'Yes'}
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name={`pa-${code}`}
                value="No"
                checked={newPatient.priorAuth[code] === 'No'}
                onChange={() => setNewPatient(prev => ({
                  ...prev,
                  priorAuth: {...prev.priorAuth, [code]: 'No'}
                }))}
                className="h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm">No</span>
            </label>
          </div>
        </div>
      )
    ))}
  </div>
</div>

{/* Financial Details */}
<div className="md:col-span-2">
  <h4 className="font-semibold text-blue-800">Financial Information</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Add these input fields */}
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network OOP Max Remaining</label>
      <input
        type="text"
        name="inNetworkOopMax"
        value={newPatient.inNetworkOopMax}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network Deductible Remaining</label>
      <input
        type="text"
        name="inNetworkDeductible"
        value={newPatient.inNetworkDeductible}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network OOP Max Remaining</label>
      <input
        type="text"
        name="outNetworkOopMax"
        value={newPatient.outNetworkOopMax}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network Deductible Remaining</label>
      <input
        type="text"
        name="outNetworkDeductible"
        value={newPatient.outNetworkDeductible}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network Coinsurance (%)</label>
      <input
        type="text"
        name="outOfNetworkCoinsurance"
        value={newPatient.outOfNetworkCoinsurance}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network Specialist Copay</label>
      <input
        type="text"
        name="inNetworkCopay"
        value={newPatient.inNetworkCopay}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Pricing Rate</label>
      <select
        name="pricingRate"
        value={newPatient.pricingRate}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      >
        <option value="">Select</option>
        <option value="UCR">UCR</option>
        <option value="Fairhealth">Fairhealth</option>
        <option value="CMS">CMS</option>
        <option value="Maximum allowable">Maximum allowable</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Percentage</label>
      <input
        type="text"
        name="pricingPercentage"
        value={newPatient.pricingPercentage}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
  </div>
</div>

{/* Representative Information */}
<div className="md:col-span-2">
  <h4 className="font-semibold text-blue-800">Representative Information</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        name="repFirstName"
        value={newPatient.repFirstName}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Initial of Last Name</label>
      <input
        type="text"
        name="repLastNameInitial"
        value={newPatient.repLastNameInitial}
        onChange={handleInputChange}
        maxLength="1"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 uppercase"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Reference ID</label>
      <input
        type="text"
        name="refId"
        value={newPatient.refId}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
      />
    </div>
  </div>
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
      
      </div>
    </div>
  );
};

export default Home;