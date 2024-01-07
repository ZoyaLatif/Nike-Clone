import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Set out on a shopping trip with incredible bargains that will transform your experience. We stand out for our exceptional value, which includes both outstanding selections and amazing savings.
        </p>
        <p className='mt-6 info-text'>
        Explore a world of opportunities created to exceed even your highest hopes and satisfy your particular needs. Your experience with us has been nothing short of extraordinary.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;