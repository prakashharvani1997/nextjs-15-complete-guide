'use server'

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";


function isInValidInput(text){
  return !text || text.trim() == ''
}

export default async function shareMeal(prevState,formData) {
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      creator:formData.get('name'),
      creator_email:formData.get('email'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
    };


    if(isInValidInput(meal.title) || isInValidInput(meal.summary) || isInValidInput(meal.creator) || isInValidInput(meal.creator_email) || isInValidInput(meal.instructions) || !meal.creator_email.includes('@') || !meal.image || meal.image.size == 0
  ){
    return {
      message: "Invalid input"
    };
    
  }

    await saveMeal(meal)

    console.log('------meal',meal)
    revalidatePath('/meals')
    redirect('/meals')
  }