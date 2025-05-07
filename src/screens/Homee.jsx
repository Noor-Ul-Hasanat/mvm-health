import { useState } from 'react';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('existing');
  const [formStep, setFormStep] = useState(1);
  const [patientData, setPatientData] = useState({
    firstName: 'Charlie',
    lastName: 'Brown',
    dob: '1997-02-01',
    subscriberId: '7290095993',
    relationship: '',
    medicareAdvantage: '',
    planType: '',
    fundingType: '',
    planStatus: '',
    secondaryPayer: 'No',
    secondaryPayerName: '',
    dmeCoverage: {},
    priorAuth: {},
    inNetworkOopMax: '',
    inNetworkDeductible: '',
    outNetworkOopMax: '',
    outNetworkDeductible: '',
    outNetworkCoinsurance: '',
    inNetworkCopay: '',
    pricingRate: '',
    pricingPercentage: '',
    repFirstName: '',
    repLastNameInitial: '',
    refId: ''
  });

  // Mock data for existing patients
  const existingPatients = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dob: '1985-05-15',
      subscriberId: '1234567890',
      lastCheck: '2023-10-15',
      status: 'Eligible'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dob: '1990-08-22',
      subscriberId: '0987654321',
      lastCheck: '2023-09-28',
      status: 'Ineligible'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({ ...prev, [name]: value }));
  };

  const handleDmeCoverage = (code, value) => {
    setPatientData(prev => ({
      ...prev,
      dmeCoverage: { ...prev.dmeCoverage, [code]: value }
    }));
  };

  const handlePriorAuth = (code, value) => {
    setPatientData(prev => ({
      ...prev,
      priorAuth: { ...prev.priorAuth, [code]: value }
    }));
  };

  const nextStep = () => setFormStep(prev => prev + 1);
  const prevStep = () => setFormStep(prev => prev - 1);

  const submitForm = () => {
    console.log('Form submitted:', patientData);
    // Here you would typically send data to your backend
    setFormStep(1);
    setActiveTab('existing');
    alert('Patient eligibility check submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
          
            <h1 className="text-xl font-bold">MVM Insurance Eligibility</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Welcome, User</span>
            <button className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 mt-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'existing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('existing')}
          >
            Existing Patients
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'new' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => {
              setActiveTab('new');
              setFormStep(1);
            }}
          >
            New Patient Check
          </button>
        </div>

        {/* Existing Patients Tab */}
        {activeTab === 'existing' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Patient Records</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                />
                <svg
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscriber ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Check</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {existingPatients.map(patient => (
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
                        <div className="text-sm text-gray-500">{patient.lastCheck}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-indigo-600 hover:text-indigo-900">Recheck</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">2</span> of <span className="font-medium">2</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* New Patient Tab */}
        {activeTab === 'new' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-200 h-2">
              <div 
                className="bg-blue-600 h-2" 
                style={{ width: `${(formStep / 7) * 100}%` }}
              ></div>
            </div>

            {/* Form Steps */}
            <div className="p-6">
              {formStep === 1 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Patient Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={patientData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={patientData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={patientData.dob}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subscriber ID</label>
                      <input
                        type="text"
                        name="subscriberId"
                        value={patientData.subscriberId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Insurance Relationship</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What is the patient's relationship to the insured?</label>
                      <select
                        name="relationship"
                        value={patientData.relationship}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select relationship</option>
                        <option value="son">Son</option>
                        <option value="spouse">Spouse</option>
                        <option value="daughter">Daughter</option>
                        <option value="child">Child</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!patientData.relationship}
                      className={`px-4 py-2 rounded-md shadow-sm ${patientData.relationship ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Plan Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Is this a Medicare Advantage Plan?</label>
                      <div className="mt-1 space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="medicareAdvantage"
                            value="Yes"
                            checked={patientData.medicareAdvantage === 'Yes'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="medicareAdvantage"
                            value="No"
                            checked={patientData.medicareAdvantage === 'No'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What is the Plan Type?</label>
                      <select
                        name="planType"
                        value={patientData.planType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select plan type</option>
                        <option value="POS">POS</option>
                        <option value="PPO">PPO</option>
                        <option value="HMO">HMO</option>
                        <option value="EPO">EPO</option>
                        <option value="SHBP">SHBP</option>
                        <option value="Direct Access">Direct Access</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What is the Funding Type of this plan?</label>
                      <select
                        name="fundingType"
                        value={patientData.fundingType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select funding type</option>
                        <option value="Self Funded">Self Funded</option>
                        <option value="Fully Insured">Fully Insured</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Is this plan Active or Terminated?</label>
                      <div className="mt-1 space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="planStatus"
                            value="Active"
                            checked={patientData.planStatus === 'Active'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Active</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="planStatus"
                            value="Terminated"
                            checked={patientData.planStatus === 'Terminated'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Terminated</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!patientData.medicareAdvantage || !patientData.planType || !patientData.fundingType || !patientData.planStatus}
                      className={`px-4 py-2 rounded-md shadow-sm ${patientData.medicareAdvantage && patientData.planType && patientData.fundingType && patientData.planStatus ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 4 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Secondary Payer</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Is there any Secondary payer?</label>
                      <div className="mt-1 space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="secondaryPayer"
                            value="Yes"
                            checked={patientData.secondaryPayer === 'Yes'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="secondaryPayer"
                            value="No"
                            checked={patientData.secondaryPayer === 'No'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                    {patientData.secondaryPayer === 'Yes' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">What's the name of the Secondary Payer?</label>
                        <input
                          type="text"
                          name="secondaryPayerName"
                          value={patientData.secondaryPayerName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 5 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">DME Coverage Check</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">Check coverage for these DME codes (Out-of-network):</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['L0648', 'L0650', 'L0651', 'L0180'].map(code => (
                        <div key={code} className="border p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{code}</span>
                            <div>
                              <label className="inline-flex items-center mr-3">
                                <input
                                  type="radio"
                                  name={`dme-${code}`}
                                  checked={patientData.dmeCoverage[code] === 'Covered'}
                                  onChange={() => handleDmeCoverage(code, 'Covered')}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Covered</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  name={`dme-${code}`}
                                  checked={patientData.dmeCoverage[code] === 'Not Covered'}
                                  onChange={() => handleDmeCoverage(code, 'Not Covered')}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Not Covered</span>
                              </label>
                            </div>
                          </div>
                          {patientData.dmeCoverage[code] === 'Covered' && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Does {code} require Prior Authorization?</label>
                              <div className="space-x-4">
                                <label className="inline-flex items-center">
                                  <input
                                    type="radio"
                                    name={`priorAuth-${code}`}
                                    checked={patientData.priorAuth[code] === 'Yes'}
                                    onChange={() => handlePriorAuth(code, 'Yes')}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                  <input
                                    type="radio"
                                    name={`priorAuth-${code}`}
                                    checked={patientData.priorAuth[code] === 'No'}
                                    onChange={() => handlePriorAuth(code, 'No')}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="ml-2 text-sm text-gray-700">No</span>
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 6 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Financial Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">In Network Individual Out of Pocket Maximum Remaining Balance</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="inNetworkOopMax"
                          value={patientData.inNetworkOopMax}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">In Network Individual Remaining Deductible Balance</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="inNetworkDeductible"
                          value={patientData.inNetworkDeductible}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Out Of Network Individual Out of Pocket Maximum Remaining Balance</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="outNetworkOopMax"
                          value={patientData.outNetworkOopMax}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Out Of Network Individual Remaining Deductible Balance</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="outNetworkDeductible"
                          value={patientData.outNetworkDeductible}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Out Of Network Coinsurance</label>
                      <div className="relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="outNetworkCoinsurance"
                          value={patientData.outNetworkCoinsurance}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">In Network Copay for office visit specialist</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="inNetworkCopay"
                          value={patientData.inNetworkCopay}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">What is the pricing rate for Out of network providers for this specific patient's plan?</label>
                      <input
                        type="text"
                        name="pricingRate"
                        value={patientData.pricingRate}
                        onChange={handleInputChange}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                        placeholder="e.g. UCR, Fairhealth, CMS, Maximum allowable"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What is the percentage?</label>
                      <div className="relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="pricingPercentage"
                          value={patientData.pricingPercentage}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md py-2"
                          placeholder="0"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 7 && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Representative Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your First Name</label>
                      <input
                        type="text"
                        name="repFirstName"
                        value={patientData.repFirstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Initial of your Last name</label>
                      <input
                        type="text"
                        name="repLastNameInitial"
                        value={patientData.repLastNameInitial}
                        onChange={handleInputChange}
                        maxLength="1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 uppercase"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reference ID #</label>
                      <input
                        type="text"
                        name="refId"
                        value={patientData.refId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-md font-medium mb-2">Review Information</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <pre className="text-xs overflow-auto">{JSON.stringify(patientData, null, 2)}</pre>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={submitForm}
                      disabled={!patientData.repFirstName || !patientData.repLastNameInitial || !patientData.refId}
                      className={`px-4 py-2 rounded-md shadow-sm ${patientData.repFirstName && patientData.repLastNameInitial && patientData.refId ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      Submit Eligibility Check
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MVM Health. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;