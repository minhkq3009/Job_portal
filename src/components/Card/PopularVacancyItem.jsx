export default function PopularVacancyItem({ title, count, isLink }) {
  return (
    <div>
      <div className="mb-1">
        <a href="#" className="text-body-lg font-medium text-gray-900 hover:text-primary-600 hover:underline">
          {title}
        </a>
      </div>
      <div className="text-body-sm text-gray-500">
        {count} Open Positions
      </div>
    </div>
  );
}