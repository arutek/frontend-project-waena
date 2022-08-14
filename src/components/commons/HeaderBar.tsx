export default () => {
  return (
    <header class='fixed flex bg-slate-800 justify-end top-0 right-0 w-10/12 h-14 px-8 z-30'>
      <ul class='flex flex-row'>
        <div class='flex hover:bg-slate-900 items-center px-4'>
          <i class='aru-icon-bell'/>
        </div>
        <div class='flex hover:bg-slate-900 items-center px-4'>
          <i class='aru-icon-message'/>
        </div>
        <div class='flex hover:bg-slate-900 items-center px-4'>
          <img src='https://via.placeholder.com/35' alt='profile-pict'/>
        </div>
      </ul>
    </header>
  )
}