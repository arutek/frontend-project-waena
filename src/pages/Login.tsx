import imgLogin from '@/assets/images/login.png'

export default () => {
  return (
    <main class='max-w-3xl mx-auto'>
      <section class='flex flex-col items-center my-8 mx-40'>
        <div>
          <div>
            <img src={imgLogin} class='h-60' />
          </div>
        </div>
        <div class='my-4 text-center'>
          <h5 class='my-4 font-bold text-black'>Fast, Efficient and Productive</h5>
          <p class='text-1sm'>
            In this kind of post, the blogger introduces a person they\’ve interviewed
            and provides some background information about the interviewee and their
            work following this is a transcript of the interview.
          </p>
        </div>
        <div class='text-center p-4 bg-white w-full rounded-lg'>
          <h5 class='font-bold text-black'>Sign In</h5>
          <div class='py-4 text-1sm'>
            <input class='input mb-8 w-full' placeholder='Email' />
            <input class='input mb-8 w-full' placeholder='Password' />
            <button class='button btn-primary w-full'>Sign In</button>
          </div>
          <p class='text-1sm'>Not a Member yet? Sign up</p>
        </div>
      </section>
    </main>
  )
}