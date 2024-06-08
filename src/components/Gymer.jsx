import React, {useState} from 'react';
import imgtrainee2 from '../assets/female-bodybuilder-sitting-giant-tire.jpg'
import imgtrainee1 from '../assets/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club.jpg'
import imgtrainee3 from '../assets/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background.jpg'
import imgtrainee4 from '../assets/pexels-willpicturethis-1954524.jpg'
import imgtrainee5 from '../assets/full-shot-man-sitting-yoga-mat.jpg'
import imgtrainee6 from '../assets/athletic-man-woman-with-dumbbells.jpg'



function Gymer() {
    //useState Hook 
    const [fitnessTrainer, setFitnessTrainer] = useState(null);
    


    const fetchData = async () => {
        //object
        const fetchedData = {
            trainer1: 'john',
            trainer2: 'abigail',
            trainer3: 'longwul',
            trainer4: 'david',
            trainer5: 'anthony',
            trainer6: 'gym and trainer',
        };

        setFitnessTrainer(fetchedData);
    };

  return (
    <>
    {/* Button */}
    <div className='space-x-10 flex h-10 px-20 items-center justify-center text-center'>
    <button onClick={fetchData} className='border border-slate-950 bg-slate-800 text-white rounded grow basis-32'>Fitness Trainers</button>
    </div>

    {/* Render Data */}
    {fitnessTrainer ? (
        <div className='md:flex flex-row justify-center space-x-5 sm:flex-row-reverse items-center '>
            <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold '>Trainer 1: 
    <img src={imgtrainee1} alt='trainer1 image' width={300} height={100} loading='lazy'/>
         {fitnessTrainer.trainer1}</p>
         </div>
         <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold'>Trainer 2: 
    <img src={imgtrainee2} alt='trainer2 image' width={300} height={100} loading='lazy'/>
        {fitnessTrainer.trainer2}</p>
        </div>
        <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold'>Trainer 3: 
    <img src={imgtrainee3} alt='trainer2 image' width={300} height={100} loading='lazy' />
        {fitnessTrainer.trainer3}</p>
        </div>
        <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold'>Trainer 4: 
    <img src={imgtrainee4} alt='trainer2 image' width={300} height={100} loading='lazy' />
        {fitnessTrainer.trainer4}</p>
        </div>
        <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold'>Trainer 5: 
    <img src={imgtrainee5} alt='trainer2 image' width={300} height={100} loading='lazy' />
        {fitnessTrainer.trainer5}</p>
        </div>
        <div className='bg-slate-100 shadow-lg shadow-slate-800'>
    <p className='text-center font-semibold'>Trainer 6: 
    <img src={imgtrainee6} alt='trainer2 image' width={300} height={100} loading='lazy' />
        {fitnessTrainer.trainer6}</p>
        </div>
    </div>
    ) : (
        <p className='text-center font-bold'>Click to see trainers</p>
    )}
    
    </>
  )
}

export default Gymer;