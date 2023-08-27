

const SectionTitle = ({ titleFirst, titleLast }) => {
    return (
        <div className="text-center py-10 ">
            <h2 className="text-4xl font-bold uppercase">{titleFirst} <span className="text-[#004E7C]">{titleLast}</span></h2>
        </div>
    );
};

export default SectionTitle;