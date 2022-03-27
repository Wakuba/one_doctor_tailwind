import { ChangeEvent, VFC } from 'react'
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormClearErrors,
  FormState,
} from 'react-hook-form'
import Input from './Input'

interface DoubleBindCheckPropsType {
  name: string
  nameOne: string
  nameTwo: string
  type: 'password' | 'email'
  titleOne: string
  titleTwo: string
  subTitleOne?: string
  subTitleTwo?: string
  style?: string
  register?: UseFormRegister<FieldValues>
  formState?: FormState<FieldValues>
  errorSetting: { errorName: string; errorMessage: string }
  setError?: UseFormSetError<FieldValues>
  getValues?: UseFormGetValues<FieldValues>
  clearErrors?: UseFormClearErrors<FieldValues>
}

const DoubleBindCheck: VFC<DoubleBindCheckPropsType> = ({
  name,
  nameOne,
  nameTwo,
  titleOne,
  titleTwo,
  subTitleOne,
  subTitleTwo,
  style,
  type,
  register,
  formState,
  setError,
  errorSetting,
  getValues,
  clearErrors,
}) => {
  const { errorName, errorMessage } = errorSetting
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (getValues && setError && clearErrors) {
      if (getValues(nameOne) !== e.target.value) {
        setError(errorName, {
          type: 'manual',
          message: errorMessage,
        })
        console.log(formState)
        console.log(formState?.errors[errorName])
      } else {
        clearErrors(errorName)
      }
    }
  }
  return (
    <div title={name} className={`${style}`}>
      <Input
        {...{
          name: nameOne,
          type: type,
          subTitle: subTitleOne,
          style: { wholeStyle: 'block mb-6', inputStyle: 'block' },
          register: register,
          errors: formState?.errors,
        }}
      >
        {titleOne}
      </Input>
      <Input
        {...{
          name: nameTwo,
          type: type,
          subTitle: subTitleTwo,
          style: { wholeStyle: 'block', inputStyle: 'block' },
          register: register,
          errors: formState?.errors,
          onChange: handleChange,
        }}
      >
        {titleTwo}
      </Input>
      {formState?.errors[errorName] ? (
        <div className='block text-xs text-[#FF0000]'>
          {formState?.errors[errorName].message}
        </div>
      ) : (
        <div className='invisible text-xs block'>message</div>
      )}
    </div>
  )
}

export default DoubleBindCheck
