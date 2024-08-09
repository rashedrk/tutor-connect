import img from '@/assets/svg/no_data.svg'
import Image from 'next/image';
const NoDataFound = () => {
    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <Image src={img} height={500} width={500} alt='No Data Found'/>
        </div>
    );
};

export default NoDataFound;