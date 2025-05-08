import React, { useState } from 'react';
import Logo from '../assets/Logo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../Redux/Slices/AuthSlice';
import { patientActions } from '../Redux/Slices/patientSlice';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients);
  
  const [showForm, setShowForm] = useState(false);

  const handellogout = () => {
    dispatch(AuthActions.logout());
  };

  const [formData, setformData] = useState({
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

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatientWithId = { 
      ...formData, 
      id: patients.length + 1,
      dmeCoverage: ['Covered', 'Covered', 'Not Covered', 'Covered'],
      priorAuthRequired: ['Yes', 'No', 'No', 'Yes'],
      repInfo: `${formData.repFirstName} ${formData.repLastNameInitial}, Ref#${formData.refId}`
    };

    dispatch(patientActions.addPatient(newPatientWithId));

    setformData({
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
    <>
    <div className="min-h-screen " >
        {/* Navbar and logo */}
      <div className='h-[102px] fixed z-50 bg-white w-full shadow-md top-0 left-0 right-0'>       
        <div className=" flex justify-between items-center p-6">
          <div className="flex items-center space-x-4 justify-items-center ">
            <img 
              src={Logo} 
              alt="MVM Health Logo" 
              className="h-[68px]"
            />
            <h1 className="text-2xl text-[#018caf] font-bold ml-4">Insurance Eligibility Checker</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200">Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-200">Patients</a></li>
              <li><button onClick={handellogout} className='hover:text-[#018caf]'>Log out</button></li>
            </ul>
          </nav>
        </div>
      </div>
{/* MAin div */}
      <div className='mt-[102px] p-6  min-h-screen'>
        {/* {currentView === 'list' ? ( */}
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-[#018caf]">Patient Records</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-[#018caf] hover:bg-blue-400 text-white px-4 py-2 rounded-md shadow mt-2"
              >
                {showForm ? 'Cancel' : 'Add New Patient'}
              </button>
            </div>

            {showForm && (
              <div className="bg-[#f0f8fa] p-6 rounded-lg shadow-md mb-8 ">
                <h3 className="text-xl font-semibold text-[#018caf] mb-4">New Patient Information</h3>
                <form onSubmit={handleSubmit} className=" gap-6 text-left">
                  <div className="space-y-4 ">
                    <h4 className="font-semibold text-xl text-[#018caf] my-5">Basic Information</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Subscriber ID</label>
                      <input
                        type="text"
                        name="subscriberId"
                        value={formData.subscriberId}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      />
                    </div>
                    </div>
                  </div> 

                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-[#018caf] my-5">Insurance Information</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Relationship to Insured</label>
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                        value={formData.medicareAdvantage}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                        value={formData.planType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                        value={formData.fundingType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                        value={formData.status}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Active">Active</option>
                        <option value="Terminated">Terminated</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Any Secondry Payer?</label>
                      <select
                        name="secondaryPayer"
                        value={formData.secondaryPayer}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
              checked={formData.dmeCoverage[code] === 'Covered'}
              onChange={() => setformData(prev => ({
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
              checked={formData.dmeCoverage[code] === 'Not Covered'}
              onChange={() => setformData(prev => ({
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
    {Object.entries(formData.dmeCoverage).map(([code, status]) => (
      status === 'Covered' && (
        <div key={code} className="flex items-center justify-between">
          <span className="text-sm">{code}</span>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name={`pa-${code}`}
                value="Yes"
                checked={formData.priorAuth[code] === 'Yes'}
                onChange={() => setformData(prev => ({
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
                checked={formData.priorAuth[code] === 'No'}
                onChange={() => setformData(prev => ({
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
  <h4 className="font-semibold text-xl text-[#018caf] my-5 ">Financial Information</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network OOP Max Remaining</label>
      <input
        type="text"
        name="inNetworkOopMax"
        value={formData.inNetworkOopMax}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network Deductible Remaining</label>
      <input
        type="text"
        name="inNetworkDeductible"
        value={formData.inNetworkDeductible}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network OOP Max Remaining</label>
      <input
        type="text"
        name="outNetworkOopMax"
        value={formData.outNetworkOopMax}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network Deductible Remaining</label>
      <input
        type="text"
        name="outNetworkDeductible"
        value={formData.outNetworkDeductible}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Out-of-Network Coinsurance (%)</label>
      <input
        type="text"
        name="outOfNetworkCoinsurance"
        value={formData.outOfNetworkCoinsurance}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">In-Network Specialist Copay</label>
      <input
        type="text"
        name="inNetworkCopay"
        value={formData.inNetworkCopay}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Pricing Rate</label>
      <select
        name="pricingRate"
        value={formData.pricingRate}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
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
        value={formData.pricingPercentage}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
  </div>
</div>

{/* Representative Information */}
<div className="md:col-span-2">
  <h4 className="font-semibold text-xl text-[#018caf] my-5">Representative Information</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        name="repFirstName"
        value={formData.repFirstName}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Initial of Last Name</label>
      <input
        type="text"
        name="repLastNameInitial"
        value={formData.repLastNameInitial}
        onChange={handleInputChange}
        maxLength="1"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white uppercase"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Reference ID</label>
      <input
        type="text"
        name="refId"
        value={formData.refId}
        onChange={handleInputChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      />
    </div>
  </div>
</div>
</div>
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#018caf] hover:bg-blue-400 text-white px-6 py-2 rounded-md shadow mt-2"
                    >
                      Check Eligibility
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#018caf] text-left">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-white uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-white uppercase tracking-wider">
                      Date of Birth
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-white uppercase tracking-wider">
                      Subscriber ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-white uppercase tracking-wider">
                      Plan Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-white uppercase tracking-wider">
                      Status
                    </th>
                    {/* <th scope="col" className="px-6 py-3 text-left text-[14px] font-semibold text-[#018caf] uppercase tracking-wider">
                      Actions
                    </th> */}
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
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => viewPatientDetails(patient)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          View
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
          </div>
          <div>
          {/* Footer section */}
          <div className=" p-5 bg-[#f9f9f9] border border-gray-100  font-sans flex w-full pt-14">
      
         <div className="  flex justify-center items-center w-[30%]">
        <img 
          src={Logo} 
          alt="Company Logo" 
          className="h-24"
        />
      </div>

      {/* Contact information */}
      <ul className="list-none p-0 m-0 mb-5 space-y-2 w-[40%] text-center">
        <li  className="font-bold text-[18px] text-[#363636]">
         LOCATION: 296 EAST BROWN STREET, SUITE D<br />
          EAST STROUDSBURG, PA 18301
        </li>
        <li  className="font-bold text-[18px] text-[#363636]">
         PHONE: (570) 445-2200
        </li>
        <li  className="font-bold text-[18px] text-[#363636]">
         FAX: (223) 213-2057
        </li>
        <li  className="font-bold text-[18px] text-[#363636]">
          MONDAY-FRIDAY 8AM-5PM
        </li>
      </ul>

      {/* Connect with us section */}
      <div className="font-semibold text-lg text-center py-2 text-[#363636] w-[30%] justify-center items-center flex flex-col">
        CONNECT WITH US
        <ul className="list-none p-0 m-0 my-5 space-x-2 flex">
          <li><a href="#" className="text-[#65c2c9] hover:text-blue-500"><FaFacebook style={{height: '25px' , width:'25px'}}/></a></li> 
          <li><a href="#" className="text-[#65c2c9] hover:text-blue-500"><FaInstagram style={{height: '25px' , width:'25px'}}/></a></li>
          <li><a href="#" className="text-[#65c2c9] hover:text-blue-500"><FaTwitter style={{height: '25px' , width:'25px'}}/></a></li>
          <li><a href="#" className="text-[#65c2c9] hover:text-blue-500"><FaGoogle style={{height: '25px' , width:'25px'}}/></a></li>
        </ul>
      </div>
    </div>
                    {/* // Footer section All right section */}
      
      <footer className="bg-[#4f9ad7] border-t border-gray-200 py-4 left-0 right-0 bottom-0 ">
        <div className="container   text-center text-sm text-white">
          &copy; {new Date().getFullYear()} MVM Health. All rights reserved.
        </div>
      </footer>
      </div>
      </div>
    </>
  );
};

export default Home;