type Props = {
  name: string;
  description: string;
  imageUrl: string;
};

export default function Card({ name, description, imageUrl }: Props) {
  return (
    <div className="bg-white border rounded-lg font-jaro font-optical text-lg">
      <div className="h-50">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover border" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-jaro font-optical">{name}</h2>
        <p className="font-normal text-base">{description}</p>
      </div>
    </div>
  );
}
