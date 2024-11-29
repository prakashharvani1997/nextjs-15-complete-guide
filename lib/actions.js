'use server'

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export default async function shareMeal(formData) {
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      creator:formData.get('name'),
      creator_email:formData.get('email'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
    };

    await saveMeal(meal)

    console.log('------meal',meal)
    redirect('/meals')
  }