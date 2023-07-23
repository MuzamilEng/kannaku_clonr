import React, { useEffect, useState } from 'react'
import { Box, LinearProgress } from '@mui/material'
import {
  StepFour,
  StepOne,
  StepTree,
  StepTwo,
  StepFive,
  StepSix,
  StepSeven,
  StepEight,
  StepEleven,
  StepNine,
  StepTen,
  StepThirteen,
  StepTwelve
} from './index'

const withChildStepProps = (Component, defaultProps) => props => {
  return <Component {...defaultProps} {...props} />
}

export default function StepsHandler() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState({ parent: 0, child: 0 })
  const [steps, setSteps] = useState([
    {
      label: 'Section A: Profile details',
      children: [StepOne, StepTwo, StepTree, StepFour, StepFive]
    },
    {
      label: 'Section B: Profile verification',
      children: [StepSix, StepSeven, StepEight, StepNine]
    },
    {
      label: 'Section C: Start getting patients',
      children: [StepTen, StepEleven, StepTwelve, StepThirteen]
    }
  ])

  useEffect(() => {
    setProgress(0)
  }, [currentStep.parent])

  useEffect(() => {
    const allChildren = steps[currentStep.parent].children.length - 1
    setProgress((currentStep.child / allChildren) * 100)
  }, [currentStep.child])

  const handleNext = () => {
    if (currentStep.child < steps[currentStep.parent].children.length - 1) {
      setCurrentStep(prevStep => ({
        parent: prevStep.parent,
        child: prevStep.child + 1
      }))
    } else if (currentStep.parent < steps.length - 1) {
      setCurrentStep(prevStep => ({
        parent: prevStep.parent + 1,
        child: 0
      }))
    }
  }

  const handleBack = () => {
    if (currentStep.child > 0) {
      setCurrentStep(prevStep => ({
        parent: prevStep.parent,
        child: prevStep.child - 1
      }))
    } else if (currentStep.parent > 0) {
      const lastChildIndex = steps[currentStep.parent - 1].children.length - 1
      setCurrentStep(prevStep => ({
        parent: prevStep.parent - 1,
        child: lastChildIndex >= 0 ? lastChildIndex : 0
      }))
    }
  }

  const handleReset = () => {
    setCurrentStep({ parent: 0, child: 0 })
  }

  const handleGoBack = parentIndex => {
    setCurrentStep(prevStep => ({
      parent: parentIndex,
      child: 0
    }))
  }

  const currentParentStep = steps[currentStep?.parent]

  const CurrentChildStep = currentParentStep?.children[currentStep?.child]

  const CurrentChildStepWithProps = withChildStepProps(CurrentChildStep, { handleNext, handleBack, handleGoBack })
  return (
    <>
      {currentStep.parent === 2 && currentStep.child === 3 ? (
        <></>
      ) : (
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant='determinate'
            value={progress}
            sx={{
              '& 	.MuiLinearProgress-bar': {
                backgroundColor: '#28328C',
                borderRadius: '0'
              },
              '& .MuiLinearProgress-root': {
                backgroundColor: '#fff !important',
                borderRadius: '0 !important'
              }
            }}
          />
        </Box>
      )}
      <CurrentChildStepWithProps />
    </>
  )
}
