const InternshipCard = ({ name, company, role, department, year, imageUrl }) => {
  return (
    <div className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{department}, Class of {year}</p>
        <div className="mt-2">
          <p className="text-gray-700 font-medium">{role} [Summer Intern] </p>
          <p className="text-gray-600">at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
