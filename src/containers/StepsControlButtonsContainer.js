import { connect } from 'react-redux'

import { prevStep, nextStep } from '../state/steps/operations.js'

import { getIsFirstStep, getIsLastStep } from '../state/steps/localSelectors.js'


import StepsControlButtons from '../components/StepsControlButtons.js'




const mapStateToProps = state => {
  return {
    isFirstStep: getIsFirstStep(state),
    isLastStep: getIsLastStep(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => {
      dispatch(prevStep());
    },
    nextStep: () => {
      dispatch(nextStep());
    }
  }
};

const StepsControlButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsControlButtons);

export default StepsControlButtonsContainer