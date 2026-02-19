interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export default function TeamCard({ name, title, bio, initials }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
        <span className="text-xl font-bold text-navy">{initials}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-saffron font-medium mb-3">{title}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
    </div>
  );
}
