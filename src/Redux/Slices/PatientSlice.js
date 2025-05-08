
import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patients',
  initialState: [
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
  ],
  reducers: {
    addPatient: (state, action) => {
      state.push(action.payload);
    },
                                                           // Still i dnt have any instruction for update or delete functionality yet but i will keep it for future use
    // updatePatient: (state, action) => {
    //   const index = state.findIndex(p => p.id === action.payload.id);          
    //   if(index >= 0) state[index] = action.payload;
    // },
    // deletePatient: (state, action) => {
    //   return state.filter(p => p.id !== action.payload);
    // }
  }
});

export const patientActions = patientSlice.actions;
export default patientSlice;