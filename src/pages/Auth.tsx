import logo from "../img/logo.svg";

const Auth = () => {
  return (
    <div className='max-w-[320px] h-[100vh] flex flex-col items-center justify-center m-auto gap-[50px]'>
      <div className='gap-[15px] flex flex-col'>
        <img className='w-[105px] h-[115px] object-cover m-auto' src={logo} alt='Лого проекта' />
        <h1 className='text-center text-[48px] font-semibold'>Авторизация</h1>
      </div>
      <div className='flex flex-col gap-[28px]'>
        <input className='block border-[2px] outline-none w-full' type='text' />
        <input className='block border-[2px] outline-none w-full' type='text' />
      </div>
      <button className='w-full bg-[#0FCAC4] h-[45px]'>Войти</button>
    </div>
  );
};

export default Auth;
