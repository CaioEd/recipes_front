import Header from '@/components/Header';
import Form from 'next/form'

const Login = () => {

  return (
    <>
        <Header/>
        <h1 className="text-2xl text-center mt-7">Crie sua receita aqui</h1>
        <div className="flex justify-center mt-6 bg-slate-100 w-1/3 m-auto rounded-xl ">
            <Form className="mt-8" action="/">
            
              <div>
                <label htmlFor="title">Título</label>
                <input className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Título da receita"/>
              </div>

              <div>
                <label htmlFor="description">Descrição</label>
                <input className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Descrição da receita"/>
              </div>

              <div>
                <label htmlFor="preparation_time">Tempo de Preparo</label>
                <input className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="number" placeholder="Tempo de preparo"/>
              </div>

              <div>
                <label htmlFor="time_unit">Unidade de tempo</label>
                <input className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Ex: minutos, horas"/>
              </div>

              <div>
                <label htmlFor="serving_units">Porções</label>
                <input className="w-64 h-8 rounded-xl rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Ex: pessoas"/>
              </div>

              <div>
                <label htmlFor="preparing_steps">Preparo</label>
                <input className="w-64 h-24 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Descreva os passos"/>
              </div>

              <div>
                <label htmlFor="cover">Capa da Receita</label>
                <input className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="file"/>
              </div>

              <div>
                <label htmlFor="category">Categoria</label>
                    <select className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {/* Aqui você pode mapear as categorias do backend */}
                      <option value="1">Categoria 1</option>
                      <option value="2">Categoria 2</option>
                    </select>
              </div>

              <button className="m-7 uppercase bg-gradient-to-r from-blue-400 to-red-300 text-white w-56 h-10 rounded-lg hover:brightness-110" type="submit">Criar Receita</button>
            </Form>
        </div>

    </>
  )
}

export default Login