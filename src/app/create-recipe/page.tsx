'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/Header';

const CreateRecipe = () => {
  const [category, setCategory] = useState<string>('');
  const [cover, setCover] = useState<File | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (cover) {
      formData.append('cover', cover);
    }

    formData.append('category', category);

    const response = await fetch('http://localhost:8000/recipe/', {
      method: 'POST',
      body: formData,
    });

    console.log(response);
    const data = await response.json();
  }

  return (
    <>
      <Header />
      <h1 className="text-2xl text-center mt-7">Crie sua receita aqui</h1>
      <div className="flex justify-center mt-6 bg-slate-100 w-1/3 m-auto rounded-xl ">
        <form className="mt-8" onSubmit={onSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="title">Título</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="text" 
              name="title"
              placeholder="Título da receita" 
              required 
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="text" 
              name="description"
              placeholder="Descrição da receita" 
              required 
            />
          </div>

          <div>
            <label htmlFor="preparation_time">Tempo de Preparo</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="number" 
              name="preparation_time"
              placeholder="Tempo de preparo" 
              required 
            />
          </div>

          <div>
            <label htmlFor="time_unit">Unidade de tempo</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="text" 
              name="preparation_time_unit"
              placeholder="Ex: minutos, horas" 
              required 
            />
          </div>

          <div>
            <label htmlFor="serving_units">Porções</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="number" 
              name="servings"
              placeholder="Número de porções" 
              required 
            />
          </div>

          <div>
            <label htmlFor="serving_units">Unidade de porções</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="text" 
              name="servings_unit"
              placeholder="Ex: pessoas" 
              required 
            />
          </div>

          <div>
            <label htmlFor="preparing_steps">Preparo</label>
            <textarea
              className="w-64 h-24 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              name="preparation_steps"
              placeholder="Descreva os passos"
              required
            />
          </div>

          <div>
            <label htmlFor="cover">Capa da Receita</label>
            <input 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
              type="file" 
              name="cover"
              accept="image/*"
              onChange={(e) => setCover(e.target.files ? e.target.files[0] : null)} 
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select 
              className="w-64 h-8 rounded-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="1">Categoria 1</option>
              <option value="2">Categoria 2</option>
              {/* Aqui você pode mapear as categorias do backend */}
            </select>
          </div>

          <button 
            className="m-7 uppercase bg-gradient-to-r from-blue-400 to-red-300 text-white w-56 h-10 rounded-lg hover:brightness-110" 
            type="submit"
          >
            Criar Receita
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateRecipe
