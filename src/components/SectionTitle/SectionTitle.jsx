const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className='mb-12 flex flex-col items-center gap-2'>
            <h3 className='text-center text-4xl text-rose-500 transition-colors font-semibold'>
                {sectionTitle}
            </h3>
            <div className='w-[100px] h-[4px] bg-rose-600 mt-4'></div>
        </div>
    );
};

export default SectionTitle;