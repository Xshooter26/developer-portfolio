export const Card = ({ title, description, children }) => (
    <div className="bg-white shadow-3xl rounded-3xl p-6">
      <h3 className="text-xl font-semibold mb-2 text-teal-600">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {children}
    </div>
  );
  