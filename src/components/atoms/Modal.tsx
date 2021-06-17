import { ReactNode, MouseEventHandler } from 'react'


export const ModalMainArea = (props: { closeModal: MouseEventHandler<HTMLDivElement>; children: ReactNode; modalWrapperStyle: string; modalContainerStyle: string }) => {
  return (
    <div onClick={props.closeModal} className={` bg-gray-100 rounded-xl backdrop-filter backdrop-blur bg-opacity-70 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-scroll shadow-xl ${props.modalWrapperStyle}`}>
      <div className={`relative space-y-4 ov-md:p-8 sm:p-6 ${props.modalContainerStyle}`}>
        <div className='absolute top-2 right-2 ov-md:h-10 ov-md:w-10 sm:h-6 sm:w-6 bg-gray-300 rounded-full flex flex-col items-center justify-center'>
          <div className='sm:text-2xl ov-md:text-3xl text-prime-blue-pale opacity-25 font-bold place-self-center'>✖️</div>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export const ModalBackdrop = (props: { closeModal: MouseEventHandler<HTMLDivElement> }) =>
  <div className='w-full h-full fixed top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20' onClick={props.closeModal} />
