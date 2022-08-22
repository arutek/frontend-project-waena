import NavigationBar from '../components/commons/NavigationBar'
import HeaderBar from '../components/commons/HeaderBar'
import Table from '../components/commons/Table'
import mock from '../libraries/mock.json'
import { Link } from '@solidjs/router'

export default () => {
  const products = mock.getProducts
  const headerList = [
    {name: 'name', value: 'Product', type: 'WIMG'},
    {name: 'sku', value: 'SKU', type: 'TEXT'},
    {name: 'qty', value: 'Quantity', type: 'NUM'},
    {name: 'price', value: 'Price', type: 'CUR'},
    {name: 'rating', value: 'Rating', type: 'RATE'},
    {name: 'status', value: 'Status', type: 'LABEL'},
  ]
  return (
    <main>
      <NavigationBar />
      <HeaderBar />
      <section class='flex flex-row'>
        <div class='basis-2/12' />
        <section id='main-content' class='relative top-14 right-0 basis-10/12'>
          <div class=' bg-white shadow m-8'>
            <div class='flex flex-row justify-between p-4'>
              <input class='input' placeholder='Search' />
              <Link href='/add-product' class='button btn-primary'>Add Product</Link>
            </div>
            <Table headList={headerList} list={products}/>
            <div class='flex flex-row py-8 items-center'>
              <p class='basis-4/12 mx-auto'>Total: {products.length}</p>
              <div class='basis-4/12 flex flex-row text-center mx-auto'>
                <p>1</p>
                <p>2</p>
              </div>
              <select class='input mx-auto'>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <footer class='pl-8'>
            ©2022 Arutek
          </footer>
        </section>
      </section>
    </main>
  )
}