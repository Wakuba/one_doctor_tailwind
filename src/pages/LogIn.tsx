import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import LoginForm from '../components/organisms/LoginForm'
const Login: React.FC = () => {
  return (
    <>
      <Header />
      <div
        title='wrapper'
        className='w-full ov-md:pt-20 flex flex-col justify-center items-center bg-prime-blue-muted'
      >
        <LoginForm style='sm:w-11/12 md:w-[716px] lg:w-[895px] xl:w-[1075px] 2xl:w-[1364px] mb-12' />
      </div>
      <Footer />
    </>
  )
}
export default Login
