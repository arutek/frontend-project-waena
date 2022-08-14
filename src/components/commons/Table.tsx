import { For, Match, Switch } from 'solid-js'

type headListValue = {
  name: string,
  value: string,
  type: 'TEXT' | 'NUM' | 'CUR' | 'WIMG' | 'IMG' | 'RATE' | 'LABEL',
} 

export default (props: {headList:headListValue[], list:Object[]}) => {
  return (
    <table class='table-fixed w-full text-center'>
      <thead class='bg-neutral-100'>
        <tr>
          <For each={props.headList}>
            {(item) => 
              <th class='py-2'>{item.value}</th>
            }
          </For>
          <th class='py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        <For each={props.list}>
          {(item) =>   
            <tr class='border-y'>
              <For each={props.headList}>
                {(header) =>
                  <td class='py-4'>
                    <Switch fallback={<p>{item[header.name]}</p>}>
                      <Match when={header.type === 'IMG'}>
                        <img src={item[header.name]} alt='product-img' class='mx-auto mb-2' />
                      </Match>
                      <Match when={header.type === 'WIMG'}>
                        <img src={item['img']} alt='product-img' class='mx-auto mb-2' />
                        <p>{item[header.name]}</p>
                      </Match>
                      <Match when={header.type === 'CUR'}>
                        <p>{Intl.NumberFormat('id-ID', ({style: 'currency', currency: 'IDR'})).format(item[header.name])}</p>
                      </Match>
                      <Match when={header.type === 'NUM'}>
                        <p>{Intl.NumberFormat('id-ID').format(item[header.name])}</p>
                      </Match>
                      <Match when={header.type === 'RATE'}>
                        <p>{item[header.name]}</p>
                      </Match>
                      <Match when={header.type === 'LABEL'}>
                        <Switch fallback={
                          <p class='text-1sm text-white bg-neutral-500 rounded-full w-fit px-4 py-1 mx-auto'>{item[header.name]}</p>
                        }>
                          <Match when={item[header.name].toLowerCase() === 'ready'}>
                            <p class='text-1sm text-white bg-green-500 rounded-full w-fit px-4 py-1 mx-auto'>{item[header.name]}</p>
                          </Match>
                        </Switch>
                      </Match>
                    </Switch>   
                  </td>
                }
              </For>
              <td class='py-4'>
                <i class='aru-icon-edit rounded hover:bg-neutral-100 p-2' />
                <i class='aru-icon-trash rounded hover:bg-neutral-100 p-2' />
              </td>
            </tr>
          }
        </For>
      </tbody>
    </table>
  )
}