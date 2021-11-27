import { createElement, VFC } from 'react'
import { useForm } from 'react-hook-form'

interface FormPropsType {
  formName: string
  children: any
  onSubmit: (data: any) => void
  style?: string
}

const Form: VFC<FormPropsType> = ({ formName, children, onSubmit, style }) => {
  const {
    handleSubmit,
    register,
    control,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm()

  return (
    <form name={formName} onSubmit={handleSubmit(onSubmit)} className={style}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    setError,
                    getValues,
                    control,
                    clearErrors,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default Form
